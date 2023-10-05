'use client'

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { useRouter } from "next/navigation"
import auth from "../../firebase-config"
import instance from "../firebase/instance"
import firebase from "firebase/compat/app"
import app from "../../firebase-config"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { setUserID } from "@/slices/userID"


export default function SignUp() {
    const router = useRouter()
    const dispatch = useDispatch()

    const auth = getAuth(app)
    function signUp() {
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        const data={
            email:email,
            password:password
        }
        axios.post('https://signupuser-cirb5hykya-uc.a.run.app', data).then((response)=>{
            console.log(response)
            dispatch(setUserID(email))           
            router.push('/lobby')
        })
    }

    return (
        <div id="sign-up-contain">
            <h4>Sign up!</h4>
            <div id="form">
                <h4 className="text-2xl text-center m-10">Sign up to play!</h4>
                <div id="input-field">
                    <input type="email" id="email" className="bg-[aliceblue] w-3/5 h-full" placeholder="Enter your email" required />
                </div>
                <div id="input-field">
                    <input type="password" id="password" className="bg-[aliceblue] w-3/5 h-full" placeholder="Enter your password" required />
                </div>
                <button id="login" className="z-4 bg-white" onClick={signUp}> Sign up! </button>
            </div>
        </div>
    )
}

