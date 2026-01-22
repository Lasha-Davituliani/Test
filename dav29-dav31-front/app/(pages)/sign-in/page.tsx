"use client"


import { signInSchema } from "@/app/validators/signInSchema"
import { yupResolver } from "@hookform/resolvers/yup"
import axios from "axios"
import { setCookie } from "cookies-next/client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import {useForm} from "react-hook-form"

export default function SignIn() {
    const [error,setError] = useState(null)
    const {register,handleSubmit,formState:{errors}} = useForm({
        resolver: yupResolver(signInSchema)
    })
    const router = useRouter()

    async function onSubmit(data:any) {
        try {
            const res = await axios.post("http://localhost:3000/auth/sign-in",data)
           if(res.status === 201){
            setCookie("accessToken",res.data.accessToken,{maxAge:60*60})
            router.push("/dashboard")
           }
        } catch (e:any) {
            setError(e.response.data.message)
        }
    }
  return (
    <div className=" flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col border p-6 gap-4">
        <input className="border rounded-2xl" type="email" placeholder="email" {...register("email")}/>
         <p className="text-[red]">{errors.email?.message}</p>
        <input className="border rounded-2xl" type="password" placeholder="password" {...register("password")}/>
        <p className="text-[red]">{errors.password?.message}</p>
        <p className="text-[red]">{error}</p>
        
        <div className=" flex justify-center gap-4">
            <button className=" border ">Sign-In</button>
            <button className=" border text-[blue]"><Link href={"/sign-up"}>Sign-Up</Link></button>
        </div>
      </form>
    </div>
  )
}