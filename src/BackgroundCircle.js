import React from 'react';
import styled, { keyframes } from 'styled-components';

const Animate = keyframes`
    0% {
        transform: scale(0.01);
        opacity: 0;
    }

    50% {
        opacity: 0.75;
    }

    100% {
        transform: scale(8);
        opacity: 0;
    }
`;

const Circle = styled.div`
    background: transparent;
    position: relative;
    width: 3rem;
    height: 3rem;
    top: ${props => props.height}px;
    left: ${props => props.width}px;
    animation-name: ${Animate};
    animation-duration: 2s;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
    border: 0.1rem solid #000;
    border-radius: 50%;
    z-index: 2;
`;

function BackgroundCircle(props) {
    
    const {width, height} = props;

    return (
        <Circle key={`${width}${height}`} width={width} height={height}></Circle>    
    );
}

export {BackgroundCircle};