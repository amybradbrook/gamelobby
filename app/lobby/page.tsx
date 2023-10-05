"use client"
import React from "react"
import { useRouter } from "next/navigation"
import { useState } from "react" 
import { useSelector, useDispatch } from "react-redux"
import { incrementIndex1, DecrementByAmountIndex1 } from "@/slices/index1Slice"
import { incrementIndex2, DecrementByAmountIndex2 } from "@/slices/index2Slice"
import type { RootState } from "../store"
//Redux items
import { setClassName1 } from "@/slices/className1"
import { setClassName3 } from "@/slices/className3"
import { setClassName2 } from "@/slices/className2"
import { setStart } from "@/slices/startSlice"
import { setReady } from "@/slices/readyPlayer2"
import instance from "../firebase/instance"
import { onAuthStateChanged } from "firebase/auth"
import { getAuth } from "firebase/auth"
import app from "@/firebase-config"
import { signOut } from "firebase/auth"
import { setUserID } from "@/slices/userID"
import axios from "axios"

export default function Home() {
  const auth = getAuth(app)
  //importing redux items
  
  const index1 = useSelector((state: RootState) => state.index1.value)
  const index2 = useSelector((state: RootState) => state.index2.value)
  const className1 = useSelector((state: RootState) => state.className1.value)
  const className2 = useSelector((state: RootState) => state.className2.value)
  const className3 = useSelector((state: RootState) => state.className3.value)
  const readyPlayer2 = useSelector((state: RootState) => state.readyPlayer2.value)
  const start = useSelector((state: RootState) => state.start.value)
  const dispatch = useDispatch()
  const uid = useSelector((state: RootState)=> state.userID.value)

  //define the router
  const router=useRouter()

  //define the colors
  const color = ['#00ffff', '#4b0082', '#00ff7f', '#ff7f50', '#ff1493', '#1e90ff']

  //define some reacthooks 
  const [disabledplayer1, setDisabled1]=useState(false)
  const [disabledplayer1submit, setDisabled1submit] =useState(true)
  const [disabledplayer2, setDisabled2]=useState(false)
  const [disabledplayer2submit, setDisabled2submit] =useState(true)
  const [player1Choice, deleteColor] = useState(color)
  if (uid!=""){
    const clickPlayer1 = function(){
      setDisabled1submit(false)
      const changecolor = document.getElementById('player1btn')
      if (index1===5){
        dispatch(DecrementByAmountIndex1(5))
        changecolor.style.backgroundColor=color[index1]
      }else{
        dispatch(incrementIndex1())
        changecolor.style.backgroundColor=color[index1]
      }
    }
  
    const savePlayer1 =function(){
      const x = index1-1
      const newList = ["#00ffff", "#4b0082", '#00ff7f', '#ff7f50', '#ff1493', '#1e90ff']
      newList.splice(x,1)
      deleteColor(newList)
      setDisabled1(true)
      setDisabled1submit(true)
      dispatch(setReady('Ready Player 2?'))
      dispatch(setClassName1("bg-[#d3d3d3] border-black border-2 h-full w-full"))
      dispatch(setClassName2("border-2 border-black p-5 text-xl border-t-0 bg-black text-white"))
    }
  
    const clickPlayer2= function(){
      setDisabled2submit(false)
      const changecolor2 = document.getElementById("player2btn");
      if (index2===4){
        dispatch(DecrementByAmountIndex2(4))
        changecolor2.style.backgroundColor=player1Choice[index2]
      }else{
        dispatch(incrementIndex2())
        changecolor2.style.backgroundColor=player1Choice[index2]
      }
    }
  
    const savePlayer2 = function(){
      setDisabled2(true)
      dispatch(setClassName3('bg-black text-white mt-10 w-full h-full rounded-xl text-xl'))
      dispatch(setStart('Start!'))
    }
    
    const handlePost = function(colorPlayer1, colorPlayer2){
      console.log("submitting")
      console.log(uid)
      const Data = {
        email: uid,
        player1: colorPlayer1,
        player2: colorPlayer2
      }
      axios.post("https://colorupload-cirb5hykya-uc.a.run.app", Data).then((response)=> {
        console.log(response)
        router.push('/game')
      })
      }
  
    const send = function(){
      var div = document.getElementById('submit')
      div.remove()
      var div = document.getElementById('play')
      div.innerHTML += '<h3>Please wait</h3>'
      const colorPlayer1 = color[index1-1]
      const colorPlayer2 = player1Choice[index2-1]
      handlePost(colorPlayer1, colorPlayer2)
    }
  
    const signOutProfile = function(){
      signOut(auth).then(()=>{
        router.push('../')
        dispatch(setUserID(""))
      })
    }
  
    return (
      <main>
        <div>
          <div id="choose" className='.m-0, p-10 bg-[black] rounded-s w-full'>
            <button onClick={signOutProfile} className="bg-white rounded text-center w-1/12 item-end">Sign out</button>
          </div>
              <div id="player1" className="border-black border-1 h-full w-full"> 
                <button id="player1btn" className={`bg-[#d3d3d3] border-black border-2 h-full w-full`} onClick={clickPlayer1} disabled={disabledplayer1}></button>
                <button className="border-2 border-black text-xl bg-black text-white border-t-0 p-5" onClick={savePlayer1} disabled={disabledplayer1submit}>Ready Player 1?</button>
              </div> 
              <div id="player2" className="border-black h-full w-full">
                <button id="player2btn" className={className1} onClick={clickPlayer2} disabled={disabledplayer2}></button>
                <button className={className2} onClick={savePlayer2} disabled={disabledplayer2submit}>{readyPlayer2}</button>
              </div>
        </div>
        <div id="play">
          <button id='submit' className={className3} onClick={send}>{start}</button>
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