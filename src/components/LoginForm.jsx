import SignUpBtn from "./SignUpBtn.jsx";
import Input from "./Input.jsx";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../store/slices/userSlice.js";
import { useNavigate } from "react-router-dom";
import { emailRules, passwordRules } from "../utils/validations.js";



function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.user.loading);

  const handleSubmit = async (e) => {
    e.preventDefault();
    /* setError(""); */

    try {
      await dispatch(signin({ email, password })).unwrap();
      navigate("/dashboard");
    } catch (err) {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center sm:h-[50vh] md:h-[100vh] sm:w-full md:w-[50%]">
      <form className="my-[10%] max-w-[600px] p-8 bg-white rounded-xl shadow-2xl md:w-[80%]" onSubmit={handleSubmit}>
        <h2 className="mb-5 text-[#8053ff] font-normal">Log in Now!</h2>
        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          validation={emailRules}
        />
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          validation={passwordRules}
        />
        <SignUpBtn name={loading ? "Logging in..." : "Log In"} disabled={loading} />
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
