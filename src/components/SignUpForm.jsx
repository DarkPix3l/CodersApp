import SignUpBtn from "./SignUpBtn.jsx";
import Input from "./Input.jsx";
import { Link } from "react-router-dom";
import {
  emailRules,
  requiredRules,
  passwordRules,
} from "../utils/validations.js";
import React, { useState } from "react";

function SignUpForm() {
  // UPDATE: It is better to group values into 1 state instead of multiple to avoid doubling renders
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    name: "",
    surname: "",
  });
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setCredentials({ ...credentials, email: e.target.value });
  };

  const handleNameChange = (e) => {
    setCredentials({ ...credentials, name: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setCredentials({ ...credentials, password: e.target.value });
  };

  const handleSurnameChange = (e) => {
    setCredentials({ ...credentials, surname: e.target.value });
  };

  return (
    <div className="flex items-center justify-center sm:h-[50vh] md:h-[100vh] sm:w-full md:w-[50%]">
      <form
        className="my-[10%] max-w-[600px] p-8 bg-white rounded-xl shadow-2xl md:w-[80%]"
        action="#"
        method="post"
      >
        <h2 className="mb-5 text-[#8053ff] font-normal">Join Coders Now!</h2>

          <Input
          type="text"
          id="name"
          name="name"
          placeholder="First Name"
          validation={requiredRules}
          onChange={handleNameChange}
          value={credentials.name}
        />

        <Input
          type="text"
          id="surname"
          name="surname"
          placeholder="Last Name"
          validation={requiredRules}
          onChange={handleSurnameChange}
          value={credentials.surname}
        />

        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          validation={emailRules}
          onChange={handleEmailChange}
          value={credentials.email}
        />

        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          validation={passwordRules}
          onChange={handlePasswordChange}
          value={credentials.password}
        />

        <SignUpBtn name="Sign Up" />
        <p className="mt-5">
          Already have an account?{" "}
          <Link to="/" className="text-[#8053ff]">
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignUpForm;
