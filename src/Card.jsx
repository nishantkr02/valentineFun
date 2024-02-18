import React, { useEffect, useState } from 'react'
import { yesImg } from './Images';
import { useId } from 'react';
export default function Card() {
    const id = useId() ;
    const [yesCount,setYesCount]=useState(0)
    const [noCount,setNoCount]=useState(0);
    //buttons text state
    const [ybtnText,setYbtnText]=useState(" Say Yes 💖")
    const [nbtnText,setNbtnText]=useState(" Say No 💔 ")
    const [reset,setReset]=useState(false);
    // text state
    const[message,setMessage]=useState("")
  
   const[img,setImg] = useState("askingCat.gif") ;
   
  const yesBtn =()=>{
    setNoCount(0);
    setYesCount(yesCount+1);
    
    /* if(yesCount==1){
        setImg(yesImg.happy);
        console.log("Image source : ",img)
    }
    else if(yesCount > 1){
    setImg(yesImg.veryHappy); */
    if(yesCount>=yesImg.yes.length-1){
        setNbtnText("💓");
        setYbtnText("💓");
        setReset(true);
      
    }
    if(yesCount<=yesImg.yes.length){
        setImg(yesImg.yes[yesCount])
        setMessage(yesImg.yesBtn[yesCount])
        setYbtnText(yesImg.ybtnText[yesCount+1]);
        
    }
    
}
 const resetBtnHandler =()=>{
    setImg(yesImg.yes[0])
    setMessage("")
    setNbtnText("Say No 💔");
    setYbtnText("Say Yes 💖") ;
    setReset(false);
 }

  const noBtn =()=>{
    setYesCount(0);
    setNoCount(noCount+1);
    if(noCount>=yesImg.no.length-1){
        setNbtnText("💔");
        setYbtnText("💔");
        setReset(true);
    }
      
    if(noCount<yesImg.no.length){
        setImg(yesImg.no[noCount])
        setMessage(yesImg.noBtn[noCount])
        setNbtnText(yesImg.nbtnText[noCount+1]);
       
    }
  
}


  
return (
<div className=" w-full bg-white text-black border border-gray-500 rounded-2xl shadow-xl bg-gray-500 border-red-700 items-center ">

<img className=" mx-auto  py-8"  src={`/src/images/${img}` }/>

<div className="px-8 pb-8">

        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 text-black">
            {message}
        </h2>
    
    <div className="flex items-center justify-between">
   
        <button className="text-white bg-green-400 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-2xl px-5 py-4 my-4  text-center" onClick={yesBtn}>{ybtnText}</button>
        
            {reset && <button className="text-white bg-blue-400 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-2xl px-5 py-4 my-4 text-center" onClick={resetBtnHandler}>
                Reset 
            </button>  }

        <button
            className="text-white bg-red-400 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-2xl px-5 py-4 my-4 text-center " onClick={noBtn}
        >
            {nbtnText}
        </button>
        
    </div>
</div>
</div>
);
}
