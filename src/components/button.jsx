import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import './button.css'

function Button(props) {
  const [onClick,setOnClick]=useState(false);
  function clicked(){
    props.passifClicked(props.id);
    if(props.passifOn===true){
    setOnClick(true);
    }
  }
  useEffect(() => {
    setTimeout(() => {
      setOnClick(false);
    }, 500);
  }, [onClick])
  
  return (
    <Container type='button'  colors={props.color} className={onClick||props.passifRandom==props.id?'random':''}  onClick={()=>{clicked();}} ></Container>
  )
}

export default Button

const Container=styled.div`
position: relative;
width:17%;
margin:2%;
height:80%;
border: 15px solid black;
border-radius: 20%;
background-color: ${props => props.colors};
`
