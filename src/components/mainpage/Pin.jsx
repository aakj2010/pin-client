import React from 'react'
import styled from 'styled-components'


function Pin(props) {
    let { urls } = props;

    return (
        <Wrapper>
            <Container>
                <img src={urls?.regular} alt="img" />
            </Container>
        </Wrapper>
    )
}

export default Pin


const Wrapper = styled.div`
    display: inline-flex;
    padding: 0.5rem;
`

const Container = styled.div`
display: flex;
align-items: center;
box-sizing: border-box;
cursor: pointer;
width: 15rem;
padding: 0.5rem;

img {
    padding: 0.5rem;
    display: flex;
    width: 100%;
    cursor: zoom-in;
    border-radius: 1rem;
    object-fit: cover:
}
`