"use client";
import Link from "next/link";

import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import LoginImg from "../_components/LoginImg";
import { Input } from "../_components/Input.jsx";
import { loginSchema } from "../../lib/loginSchema.js";
import { Button } from "../_components/Button";

export default function LoginPage() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState({
    global: "",
    email: "",
    password: "",
  });

  const formRef = useRef();

  const dispatch = useDispatch();
  const router = useRouter();
  const loading = useSelector((state) => state.auth.loading);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let valid = handleValidation(credentials);
    if (valid) {
      try {
        await dispatch(signin(credentials)).unwrap();
        router.push("/challenges");
      } catch (err) {
        alert("Invalid email or password");
      }
    }
  };
  const handleValidation = (credentials) => {
    const result = loginSchema.safeParse(credentials);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;

      setError({
        global: "",
        email: fieldErrors.email?.[0] || "",
        password: fieldErrors.password?.[0] || "",
      });

      return false;
    }

    setError({ global: "", email: "", password: "" });
    return true;
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <LoginImg />
      <div className="flex items-center justify-center sm:h-[50vh] md:h-[100vh] sm:w-full md:w-[50%]">
        <form
          className="flex flex-col my-[10%] max-w-[600px] p-8 bg-white rounded-xl shadow-2xl md:w-[80%]"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <h2 className="mb-5 text-[#8053ff] font-normal">Sign Up Now!</h2>
          {error.global && (
            <p className="text-red-500 mb-4 text-sm">{error.global}</p>
          )}
          <div>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={credentials.name}
              onChange={(e) =>
                setCredentials({ ...credentials, name: e.target.value })
              }
            />
            {error.password && (
              <p className="text-red-500 mb-4 text-sm">{error.name}</p>
            )}
          </div>
          <div>
            <Input
              type="text"
              id="surname"
              name="surname"
              placeholder="Surname"
              value={credentials.surname}
              onChange={(e) =>
                setCredentials({ ...credentials, surname: e.target.value })
              }
            />
            {error.surname && (
              <p className="text-red-500 mb-4 text-sm">{error.surname}</p>
            )}
          </div>

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

          <Button disabled={loading} variant={"blue"} className={"Signup"}>
            {" "}
            {loading ? "Signing up..." : "Sign up"}
          </Button>
          <p className="mt-5">
            New to CodeCLA?{" "}
            <Link href="/signup" className="text-[#8053ff]">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
