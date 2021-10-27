import React from 'react';
import styled from 'styled-components';

const Welcome = () => {
    return(
        <Wrapper>
            <Col>
                <Title>Escape</Title>
                <Text>Welcome to my Roguelike project!</Text>
                <Text>Temporarily named "Escape".</Text>
            </Col>

        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    height: 100%;
    width: 100%;
    `

const Col = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid white;
    border-radius: 7px;
    padding: 20px;
    height: 100%;
    width: 100%;
`

const Title = styled.div`
    display: flex;
    justify-content: center;
    font-size: 2em;
    font-weight: 900;
`

const Text = styled.div`
    display: flex;
    justify-content: center;
`

export default Welcome;