import React, {useRef, useEffect} from 'react';
import DrawCircle from './DrawCircle';

export default function Canvas(props) {

    const canvasRef = useRef(null);

    
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        let frameCount = 0;
        let animationFrameId;

        const render = () => {
            frameCount++;
            DrawCircle(context, frameCount);
            animationFrameId = window.requestAnimationFrame(render);
        }

        render();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        }
    }, [DrawCircle]);

    return(
        <canvas ref={canvasRef}></canvas>
    );
}