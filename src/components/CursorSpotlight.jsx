import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CursorSpotlight() {
  const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 });
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorXY({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 150);
      cursorY.set(e.clientY - 150);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: 300,
        height: 300,
        borderRadius: '50%',
        backgroundColor: 'rgba(252, 101, 32, 0.15)',
        filter: 'blur(80px)',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'screen',
        x: cursorX,
        y: cursorY,
      }}
    />
  );
}
