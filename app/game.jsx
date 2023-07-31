"use client"

import React, { useState } from 'react'

const Game = () => {
  
  const [arr,setarr]=useState([['','',''],['','',''],['','','']])

    const [newgame,setnewgame]=useState(true)
    const[Players,setPlayes]=useState({
      player_one:"Player_1",
      player_one_mark:"X",
      player_two:"Player_2",
      player_two_mark:"O"
    })
    const [chance,setChance]=useState(false)




    const handleName=(a,b)=>{
      setPlayes({...Players,[a]:b})
    }

    
    function Toggle(e){
      e.preventDefault()
      const payload={
        player_one:Players.player_one,
        player_one_mark:Players.player_one_mark=="X"?"O":"X",
        player_two:Players.player_two,
        player_two_mark:Players.player_two_mark=="O"?"X":"O",
      }
       setPlayes(payload)

    }

    function NayaGame(){
      setPlayes({
        player_one:"Player_1",
        player_one_mark:"X",
        player_two:"Player_2",
        player_two_mark:"O"
      })
      setarr([['','',''],['','',''],['','','']])
    }


   const setThis=async(id)=>{
    const a=id[0],b=id[1];

     if(arr[+a][+b].length==0){
      setChance((prev)=>!prev)

      arr[+a][+b]=await chance===false?Players.player_one_mark:Players.player_two_mark
  

     setarr(arr)
  
     document.getElementById(id).innerText=arr[+a][+b]
  }
  
     setTimeout(()=>{
      if(checkWhoWon(arr)!=="Continue"){
        alert(checkWhoWon(arr));
        NayaGame()
        setnewgame(true);
      }
     },[1000])
    // console.log(arr)
   }

    function checkWhoWon(arr){
      for (let i = 0; i < 3; i++) {
        if (arr[i][0] === arr[i][1] && arr[i][1] === arr[i][2]) {
          if (arr[i][0] !== '') {
           if (arr[i][0]==Players.player_one_mark)return Players.player_one+" Won"
           else return Players.player_two+" Won"
          }
        }
      }
    
      // Check columns
      for (let j = 0; j < 3; j++) {
        if (arr[0][j] === arr[1][j] && arr[1][j] === arr[2][j]) {
          if (arr[0][j] !== '') {
            if (arr[0][j]==Players.player_one_mark)return Players.player_one+" Won"
           else return Players.player_two+" Won"
          }
        }
      }
    
      if (arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2]) {
        if (arr[0][0] !== '') {
          if (arr[0][0]==Players.player_one_mark)return Players.player_one+" Won"
          else return Players.player_two+" Won"
        }
      }
    
      if (arr[0][2] === arr[1][1] && arr[1][1] === arr[2][0]) {
        if (arr[0][2] !== '') {
          if (arr[0][2]==Players.player_one_mark)return Players.player_one+" Won"
          else return Players.player_two+" Won"
        }
      }

      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (arr[i][j] === '') {
            return "Continue";
          }
        }
      }

     return "Draw"
    }



const CSS='bg-black text-4xl w-[80px] h-[80px] text-white text-center justify-center items-center'
  return (
    <div>
    <div className='flex flex-col items-center justify-center p-2 mb-4'>
      <button onClick={()=>{setnewgame(true);NayaGame()}} className="py-1 px-4 bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] cursor-pointer font-bold  rounded-md">
        Start New Game
      </button>
    </div>



 { newgame?  <div className="w-full max-w-xs">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
       First Player Name :
      </label>
      <input onChange={(e)=>handleName(e.target.name,e.target.value)} name='player_one' placeholder='Player-1' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
  </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">
      Second Player Name :
      </label>
      <input onChange={(e)=>handleName(e.target.name,e.target.value)}  name='player_two' placeholder='Player-2' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"/>
     
    </div>

    <div className='font-bold mb-3'>
      <h1 className='italic'><span className='text-indigo-600 '>{Players.player_one} </span>Assigned Mark -- <span className='text-red-600 '>{Players.player_one_mark}</span></h1>
      <h1 className='italic'><span className='text-indigo-600 '>{Players.player_two}</span> Assigned Mark --  <span className='text-red-600'>{Players.player_two_mark}</span></h1>
      <button onClick={Toggle} className='bg-red w-full bg-red-500 p-2 text-white'>Change Mark</button>
    </div>

    <div className="flex items-center justify-between">
      <button  onClick={()=>{setnewgame(false)}} className=" w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
       Start
      </button>
    </div>
   
  </form>
 
</div>:

   (<div>
    
    <div className='font-bold mb-3'>
      <h1 className='italic'><span className='text-indigo-600 '>{Players.player_one} </span>Assigned Mark -- <span className='text-red-600 '>{Players.player_one_mark}</span></h1>
      <h1 className='italic'><span className='text-indigo-600 '>{Players.player_two}</span> Assigned Mark --  <span className='text-red-600'>{Players.player_two_mark}</span></h1>
    </div>
    
     <h1 className='text-orange-500 font-extrabold mb-4 bg-slate-900 text-center p-4'>  
     {chance===false?Players.player_one+" Chance - "+Players.player_one_mark:Players.player_two+" Chance - "+Players.player_two_mark}</h1>
    
    <div className='grid grid-cols-3 gap-1 mt-0 w-auto'>
        <div id='00'  onClick={()=>{setThis('00')}} className={CSS}></div>
        <div id='01'  onClick={()=>{setThis('01')}} className={CSS}></div>
        <div id='02'  onClick={()=>{setThis('02')}} className={CSS}></div>
        <div id='10'  onClick={()=>{setThis('10')}} className={CSS}></div>
        <div id='11'  onClick={()=>{setThis('11')}} className={CSS}></div>
        <div id='12'  onClick={()=>{setThis('12')}} className={CSS}></div>
        <div id='20'  onClick={()=>{setThis('20')}} className={CSS}></div>
        <div id='21'  onClick={()=>{setThis('21')}} className={CSS}></div>
        <div id='22'  onClick={()=>{setThis('22')}} className={CSS}></div>
    </div>
  </div>
)
}


    </div>
  )
}

export default Game