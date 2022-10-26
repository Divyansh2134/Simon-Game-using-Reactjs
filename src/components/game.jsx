
import React, { useState ,useEffect } from 'react'
import styled from 'styled-components'
import Button from './button'
import './button.css'

function Game(props) {
  var start=false
  var [isLevel,setIsLevel]=useState(0)
  const [isOn,setIsOn]=useState(false)
  const [isClicked,setIsClicked]=useState(-1);
  const [isRandom,setIsRandom]=useState(-1);
  const [isRandomInput,setIsRandomInput]=useState([])
  const [isUserInput,setIsUserInput]=useState([])

  function checkAnswer(len){
    console.log(len)
    console.log(isRandomInput[len-1]+" "+isUserInput[len-1])
    if(isRandomInput[len-1]==isUserInput[len-1]){
      if(isRandomInput.length==isUserInput.length){
        setIsUserInput([])
        setTimeout(() => {
          random()
        }, 2000);
      }
    }else{
       var aud=new Audio("sounds/wrong.mp3")
       aud.play()
       start=false
       setIsOn(false)
       setIsLevel(-1)
       props.passGameLevel(-1)
       setIsRandomInput([])
       setIsUserInput([])
       
        document.querySelector("body").classList.add("game-over");
        setTimeout(function(){document.querySelector("body").classList.remove("game-over");},200);
       
    }
  }
  

  function flashSound(color){
    if(isOn===true || start===true){
    var aud=new Audio("sounds/"+color+".mp3");
    aud.play();
    }
  }

  function call(a){
      if(a==0) flashSound('red');
      else if(a==1 ) flashSound('blue');
      else if(a==2 ) flashSound('green');
      else if(a==3 ) flashSound('yellow');
  }

  useEffect(() => {
    if(isClicked!==-1){
    var arrr=[...isUserInput]
    arrr.push(isClicked)
    setIsUserInput(arrr)
    call(isClicked)
    setIsClicked(-1);
    }
  }, [isClicked])
  useEffect(()=>{
    if(isOn===true){
    checkAnswer(isUserInput.length)
    }
  },[isUserInput])

  function random(){
    if(start==true || isOn==true){
    var ran=Math.trunc(4*(Math.random()))
    call(ran)
    setIsRandom(ran)
    var arr=[...isRandomInput]
    arr.push(ran)
    if(isLevel==-1){
      setIsLevel(1)
    }else{
    setIsLevel(isLevel+1)
    }
    setIsRandomInput(arr)
    setTimeout(() => {
      setIsRandom(-1)
    }, 500);
    }
  }
  
  function keypressed(){
    if(start==false && isOn==false){
      start=true;
      setIsOn(true)
      random();
    }
  }
  useEffect(()=>{
    document.addEventListener('keydown',keypressed)
  },[start,isOn]) 

  useEffect(()=>{
    var level=isLevel
      props.passGameLevel(level)
  },[isLevel])

  return (
    <Container>
    <div className='home'>
      <div className='row'>
      <Button  id='0' color='red' passifClicked={setIsClicked}  passifRandom={isRandom} passifOn={isOn}/>
      <Button id='1' color='blue' passifClicked={setIsClicked}  passifRandom={isRandom} passifOn={isOn}/>
      </div>
      <div className='row'>
      <Button id='2' color='green' passifClicked={setIsClicked}  passifRandom={isRandom} passifOn={isOn} />
      <Button id='3' color='yellow' passifClicked={setIsClicked} passifRandom={isRandom} passifOn={isOn} />
      </div>
     
    </div> 
    </Container>
  )
}

export default Game

const Container=styled.div`
width:100%;
height:87vh;
.home{
  position: relative;
  width:100%;
  height:100%;
}
.row{
  display:block;
  height:43.5vh;
  margin:0;
  display:flex;
  justify-content:center;
}
.s{
  width:50px;
}

`
