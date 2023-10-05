"use client"

import { useRouter } from "next/navigation"
import './globals.css'
import instance from "./firebase/instance"
import { signInWithEmailAndPassword, getAuth } from "firebase/auth"
import app from "../firebase-config"
import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "./store"
import { setUserID } from "@/slices/userID"
import firebase from "firebase/compat/app"
import axios from "axios"



export default function LogIn() {
    const router = useRouter()
    const auth = getAuth(app)
    const uid = useSelector((state: RootState) => state.userID.value)
    const dispatch = useDispatch()

    function logIn(){
        const email = document.getElementById("input-email").value 
        const password = document.getElementById("input-password").value
        const data={
            email: email,
            password: password,
        }
        axios.post('https://loginuser2-cirb5hykya-uc.a.run.app', data).then((response)=>{
            console.log("success")
            dispatch(setUserID(email))
            router.push('/lobby')
        })
        // signInWithEmailAndPassword(auth, email,password)
        // .then((userCredential)=>{
        //     userCredential.user.getIdToken(/*forceRefresh*/ true).then(function(idToken){
        //         instance.post("/idtokens", idToken).then((response)=>{
        //             console.log(JSON.parse(response.data))
        //         })
        //     })
        //     const user = userCredential.user
        //     dispatch(setUserID(user.uid))
    }

    function signUp() {
        router.push('/signup')
    }
    return (
        <main>
            <div id="choose" className='.m-0, p-10 bg-[black] rounded-s w-full'></div>
                <div id="form">
                    <h4 className="text-2xl text-center m-10">Login</h4>
                    <div id="input-field">
                        <input type="email" placeholder="Enter your email" id="input-email" className="bg-[aliceblue] w-3/5 h-full" required />
                    </div>
                    <div id="input-field" className="">
                        <input type="password" placeholder="Enter your password" id="input-password" className="bg-[aliceblue] w-3/5 h-full" required />
                    </div>
                    <div>
                        <button id="login" onClick={logIn} className="z-4 bg-white w-1/5 h-2.5"> Login </button>
                    </div>
                    <div>
                        <button id="login" onClick={signUp}>Sign up here</button>
                    </div>
                </div>
        </main>
    )
}