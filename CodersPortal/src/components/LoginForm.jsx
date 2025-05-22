import SignUpBtn from "./SignUpBtn.jsx";
import Input from "./Input.jsx";
import { Link } from "react-router-dom";
import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../store/slices/userSlice.js";
import { useNavigate } from "react-router-dom";
import { emailRules, passwordRules } from "../utils/validations.js";

function LoginForm() {
  // UPDATE: It is better to group values into 1 state instead of multiple to avoid doubling renders
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState({
    global: "",
    email: "",
    password: "",
  });

  const formRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.user.loading);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // UPDATE: Errors are handled only after submission
    let valid = handleValidation(credentials);
    if (valid) {
      try {
        await dispatch(signin(credentials)).unwrap();
        navigate("/leaderboard");
      } catch (err) {
        alert("Invalid email or password");
      }
    }
  };

  const handleValidation = ({ email, password }) => {
    setError({
      ...error,
      email: emailRules(email),
      password: passwordRules(password),
    });
    return (
      typeof emailRules(email) === "boolean" &&
      typeof passwordRules(password) === "boolean"
    );
  };

  return (
    <div className="flex items-center justify-center sm:h-[50vh] md:h-[100vh] sm:w-full md:w-[50%]">
      <form
        className="my-[10%] max-w-[600px] p-8 bg-white rounded-xl shadow-2xl md:w-[80%]"
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <h2 className="mb-5 text-[#8053ff] font-normal">Log in Now!</h2>
        {error.global && (
          <p className="text-red-500 mb-4 text-sm">{error.global}</p>
        )}

        <div>
          <Input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            value={credentials.email}
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
          />
          {error.email && (
            <p className="text-red-500 mb-4 text-sm">{error.email}</p>
          )}
        </div>
        <div>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
          {error.password && (
            <p className="text-red-500 mb-4 text-sm">{error.password}</p>
          )}
        </div>

        <SignUpBtn
          name={loading ? "Logging in..." : "Log In"}
          disabled={loading}
        />
        <p className="mt-5">
          New to CodeCLA?{" "}
          <Link to="/signup" className="text-[#8053ff]">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
