import React from 'react';
import styled, { keyframes } from 'styled-components';

const Animate = keyframes`
    0% {
        transform: scale(0.01);
        opacity: 0.01;
    }

    50% {
        opacity: 0.35;
    }

    100% {
        transform: scale(4);
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
    border: 0.01rem solid #3a4072;
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