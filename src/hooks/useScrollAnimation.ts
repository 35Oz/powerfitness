import { useState, } from 'react';

export const useScrollAnimation = () => {
  const [scrollY,] = useState(0);


  const getTransform = (baseValue: number) => {
    const rotation = (scrollY * 0.05 + baseValue) % 360;
    const translateY = Math.sin(scrollY * 0.002) * 30;
    return `rotate(${rotation}deg) translateY(${translateY}px)`;
  };

  return { scrollY, getTransform };
};