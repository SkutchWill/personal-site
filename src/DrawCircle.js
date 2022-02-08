import React from 'react';

export default function DrawCircle(props) {

    const draw = (ctx, frameCount) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.strokeStyle = '#000';
        ctx.beginPath();
        ctx.arc( 50, 100, 20*(frameCount*0.05)**2, 0, 2*Math.PI);
        ctx.stroke();
    };

    return draw;
    
}