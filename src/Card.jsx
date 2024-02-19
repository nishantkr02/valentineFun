import React, { useState ,useCallback } from 'react'
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
   
  const yesBtn =useCallback(()=>{
    setNoCount(0);
    setNbtnText("Say No 💔");
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
    
},[yesCount,ybtnText,img,setImg,setMessage,setYbtnText,setNbtnText,noCount])

 const resetBtnHandler =()=>{
    setImg(yesImg.yes[0])
    setMessage("")
    setNbtnText("Say No 💔");
    setYbtnText("Say Yes 💖") ;
    setReset(false);
 }

  const noBtn = useCallback(()=>{
    setYesCount(0);
    setYbtnText("Say Yes 💖") ;
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
  
},[yesCount,ybtnText,img,setImg,setMessage,setYbtnText,setNbtnText,noCount])  


  
return (
<div className=" mt-4 width  bg-white text-black border-4  rounded-3xl shadow-2xl border-pink-500 items-center  "

>

<img className=" mx-auto   py-8"  style={{width:"60%" ,height:"90%"}} src={`./images/${img}` }/>

<div className=" px-8 pb-8 mt-1 w-6/12 sm:w-full ">
    <div className=' mx-4 text-center '>
    <h2 className="text-2xl  sm:text-2xl font-semibold tracking-tight text-red-900  ">
            {message}
        </h2>

    </div>
        
    
    <div className="flex items-center justify-between ">
   
        <button className="text-white bg-green-400 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-3xl text-2xl px-5  py-2 my-4  text-center shadow-2xl" onClick={yesBtn}>{ybtnText}</button>
        
            {reset && <button className="text-white bg-blue-400 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-2xl px-5 mx-4 py-2 my-4 text-center shadow-2xl" onClick={resetBtnHandler}>
                Reset 
            </button>  }

        <button
            className="text-white bg-red-400 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-3xl text-2xl px-5 mx-4  py-2 my-4 text-center shadow-2xl " onClick={noBtn}
        >
            {nbtnText}
        </button>
        
    </div>
</div>
</div>
);
}
