import * as React from "react";
import * as ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

const NAME: string = "Cody Q Duong"

const App = () => {

    const animate = useSpring({
        opacity: 1,
        from: {opacity: 0},
        config: {
            duration: 2500,
        },
    })

    return (
        <animated.div style={animate}>
            {NAME}
        </animated.div>
    )
}

ReactDOM.render(<App/> ,document.getElementById('root'))