import React from 'react'
import styled from 'styled-components'
import { BsFillPersonFill } from 'react-icons/bs';

function header() {
  return (
    <Header>
      <div className='left h2'>Simon</div>
      <div className='mid'></div>
      <div className='right'><BsFillPersonFill className='icon'  size={'2em'}/></div>
    </Header>
  )
}

export default header

const Header=styled.div`
 width:100vw ;
height:5vh;
display:flex;
justify-content:space-between;
position: fixed;

.left{
  width:20vw;
  overflow-y: hidden;
  height:5vh;
  margin:0;
  font-weight: bold;
  text-align: center;
}
.mid{
  width:60vw;
  
}
.right{
  width:20vw;
  height:5vh;
  display:flex;
  justify-content:center;
}

`