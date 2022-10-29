import React from 'react'
import styled from 'styled-components'
import Pin from './Pin'
import './MainBoard.css'


function MainBoard(props) {

  let { pins } = props;
  console.log(pins)

  return (
    <Wrapper>
      <Container className='mainboard_container'>
        {
          pins.map((pin, index) => {
            let { urls } = pin;
            return <Pin key={index} urls={urls} />
          })
        }
      </Container>
    </Wrapper>
  )
}

export default MainBoard

const Wrapper = styled.div`
  background-color: white;    
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 1rem;
  justify-content: center;
`

const Container = styled.div`
  margin: 0 auto;
  height: 100%;
  background-color: white; 
`