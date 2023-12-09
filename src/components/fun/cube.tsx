import React, {useRef } from 'react'
import { motion, useAnimationFrame } from "framer-motion";
import { cubereveal } from '../../utils/variant';

const Cube:React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);

    useAnimationFrame((t) => {
      const rotate = Math.sin(t / 10000) * 200;
      const y = (1 + Math.sin(t / 1000)) * -50;
      if(ref.current)
        ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
    });

    return (
        <motion.div initial='hidden' variants={cubereveal} animate='visible'
         className="cubecontainer z-100">
            <div className="cube" ref={ref}>
            <div className="side front" />
            <div className="side left" />
            <div className="side right" />
            <div className="side top" />
            <div className="side bottom" />
            <div className="side back" />
            </div>
        </motion.div>
    )
}

export default Cube
