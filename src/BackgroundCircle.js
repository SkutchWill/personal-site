import React from 'react';
import styled, { keyframes } from 'styled-components';

const Animate = keyframes`
    from {
        transform: scale(0.1);
        opacity: 1;
    }

    to {
        transform: scale(5);
        opacity: 0;
    }
`;

const Circle = styled.div`
    background: transparent;
    position: relative;
    width: 100px;
    height: 100px;
    top: ${props => props.height}px;
    left: ${props => props.width}px;
    animation: ${Animate} 2s ease-out infinite;
    border: 5px solid #000;
    border-radius: 50%;
`;

function BackgroundCircle(props) {
    
    const {width, height} = props;

    return (
        <Circle width={width} height={height}></Circle>
    );
}

export {BackgroundCircle};