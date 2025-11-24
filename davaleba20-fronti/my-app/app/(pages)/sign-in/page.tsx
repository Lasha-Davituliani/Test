"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { use } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { SignInSchema } from "../validators/SignIn";
import { setCookie } from "cookies-next";
export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignInSchema),
  });
  const router = useRouter();
  async function onSubmit(data: any) {
    try {
      const res = await axios.post("http://localhost:8080/auth/sign-in", data);
      if (res.status === 200) {
        setCookie("token", res.data.data, { maxAge: 60 * 60 });
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex items-center justify-center h-screen text-white">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-auto w-[400px] bg-black p-4 rounded-2xl flex flex-col gap-4"
      >
        <input
          type="email"
          className="border rounded-xl pl-4 text-white"
          placeholder="Email"
          {...register("email")}
        />
        <p className="text-red-600">{errors.email?.message}</p>
        <input
          type="password"
          className="border rounded-xl pl-4 text-white"
          placeholder="Password"
          {...register("password")}
        />
        <p className="text-red-600">{errors.password?.message}</p>
        <button className="w-full bg-red-400">send</button>
        <div>
          <span className="text-white">have you account?</span>
          <Link className="text-[blue]" href={"/sign-up"}>
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
}
