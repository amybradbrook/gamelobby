"use client"
import 'app/globals.css'
import { useState } from 'react'
import instance from '../firebase/instance'
import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "../store"
import { signOut } from 'firebase/auth'
import app from '@/firebase-config'
import { setUserID } from '@/slices/userID'
import { useRouter } from 'next/navigation'
import { getAuth } from 'firebase/auth'
import axios from 'axios'
import { setClassName1 } from "@/slices/className1"
import { setClassName3 } from "@/slices/className3"
import { setClassName2 } from "@/slices/className2"


export default function Game() {
    const [ color1_choice, setColor1 ] = useState('#d3d3d3')
    const [ color2_choice, setColor2 ] = useState('#d3d3d3')
    const uid = useSelector((state: RootState)=> state.userID.value)
    const dispatch = useDispatch()
    const router = useRouter()
    const auth = getAuth(app)

    if (uid!=""){
        const handleGet = function(uid){
            const email=uid
            console.log("recieving")
            const data={
                email:email,
            }
            axios.post("https://colorget-cirb5hykya-uc.a.run.app", data).then((response)=> {
                setColor1(response.data.player1)
                setColor2(response.data.player2)
                const changecolor1 = document.getElementById("player1_color");
                changecolor1.style.backgroundColor=color1_choice
                const changecolor2 = document.getElementById("player2_color")
                changecolor2.style.backgroundColor=color2_choice
            })
        }
        handleGet(uid)

        const signOutProfile=function(){
            router.push('./')
            dispatch(setUserID(""))
        }

        return(
            <main>
                <div>
                    <div id="header">
                        <h1 id="header" className=".m-0, p-10 bg-[black] rounded-s w-full z-6 text-white text-center text-5xl"> Intergalatic racing! </h1>
                        <button onClick={signOutProfile} className="bg-white rounded text-center w-1/12 item-end">Sign out</button>
                    </div>
                    <div id="player1_color" className={`bg-[#d3d3d3] border-black border-2 h-full w-full`}></div>
                    <div id="player2_color" className={`bg-[#d3d3d3] border-black border-2 h-full w-full`}></div>
                </div>
            </main>
        )
    } else {
        alert("Please sign in or create an account")
        dispatch(setClassName1('invisible'))
        dispatch(setClassName2('invisible'))
        dispatch(setClassName3('invisible'))
        router.push("/")
    }
}