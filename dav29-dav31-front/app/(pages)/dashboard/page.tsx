"use client"
import axios from 'axios'
import { setCookie } from 'cookies-next'
import { getCookie } from 'cookies-next/client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function Dashboard() {
    const [user,setUser] = useState<any>(null)
    const router = useRouter()
    
     async function currentUser(token:any) {
        try {
            const res = await axios.get("http://localhost:3000/auth/current-user",{
                headers:{
                    "Authorization":`Bearer ${token}`
                }
            })
            setUser(res.data)
        } catch (error:any) {
            router.push("/sign-in")
        }
    }

    useEffect(() => {
        const token = getCookie("accessToken")
        currentUser(token)
    },[])
    if(!user) return null
  return (
    <div>
      <h2> hello</h2>
      <h1>Email:{user.email}</h1>
    </div>
  )
}