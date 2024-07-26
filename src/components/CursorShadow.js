// CursorShadow.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Shadow = styled.div`
  position: fixed;
  width: 30px; /* Increased width */
  height: 30px; /* Increased height */
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.1) 100%); /* Greyish gradient */
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3); /* Larger shadow with greyish tone */
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease;
`;

const CursorShadow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <Shadow style={{ top: position.y, left: position.x }} />;
};

export default CursorShadow;
