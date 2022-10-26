import React, { useState } from 'react'
import styled from 'styled-components'
import Game from './game'

function Home() {
 const [isLevel,setIsLevel]=useState(0);
  return (
    <Contain>
     <div className='space' ></div>
     <div className='line' ></div>
     {isLevel===0 && <h1 id="level-title">Press A Key to Start</h1> }
     {isLevel>0 && <h1 id="level-title">Level {isLevel}</h1> }
     {isLevel<0 && <h1 id="level-title">Game Over Press A Key to Start</h1> }
     <Game  passGameLevel={setIsLevel} />
    </Contain>
  )
}

export default Home

const Contain=styled.div`
height:100%;
width: 100vw ;
.space{
  height:5vh;
  width:100%;
}
.line{
  top:5vh;
  height:1px;
  background-color:black;
}
#level-title{
 text-align:center;
 height:7vh;
 margin:0;
}
`
