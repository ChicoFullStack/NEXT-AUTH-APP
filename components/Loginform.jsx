"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../assets/logo.png";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid flex-auto place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-blue-400 bg-white">
        {/* <h1 className="text-xl font-bold my-4">Login</h1> */}
        <div className="grid place-items-center py-2">
          <Image src={logo} height={150} width={150} alt="Logo" />
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button className="bg-blue-600 text-white font-bold cursor-pointer px-6 py-2">
            Login
          </button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
          <div className="font-bold text-blue-800 text-center text-sm py-1 mt-2">
            <p>Created by Opc Systems.</p>
          </div>
          {/* <Link className="text-sm mt-3 text-right" href={"/register"}>
            Don`t have an account? <span className="underline">Resister</span>{" "}
          </Link> */}
        </form>
      </div>
    </div>
  );
}
