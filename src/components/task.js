import React from 'react';
import styled, { keyframes } from 'styled-components';
import image1 from "../static/image1.svg"
import image2 from "../static/image2.svg"



const rotateAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;


const RotatingImage = styled.img`
    width: 400px;
    height: 400px;
    animation: ${rotateAnimation} 100s linear infinite;
`;


const MyImage = styled.img`
    width: 50px;
    height: 50px;
    position: absolute;
    bottom: 20px;
    right: 50px;
    left: 20px;
    margin-bottom: 50px;
    margin-left: 40px;
    display: inline;
`;

const MyComponent = () => {
    return (
        <div style={{ position: 'relative', background: "black" }} className='bg-black'>
            <RotatingImage src={image2} alt="Rotating Image" />
            <div className='ship'>
                <img src={image1} alt="Image1" />


            </div>
        </div>
    );
}

export default MyComponent;
