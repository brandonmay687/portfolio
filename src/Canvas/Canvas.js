import React, { useRef, useEffect } from "react";

const Canvas = props => {
    const ref = useRef(null);
    const canvas = ref.current;
    const context = canvas.getContext('2d');

    return <canvas ref = { ref } { ...props } />
}

export default Canvas;