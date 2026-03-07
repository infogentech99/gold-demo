"use client";

import { useEffect, useState } from "react";

export default function FallingPetals() {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const createPetal = () => {
      const petal = {
        id: Math.random(),
        left: Math.random() * 100,
        duration: 12 + Math.random() * 6,
        size: 80 + Math.random() * 40
      };

      setPetals((prev) => [...prev, petal]);

      setTimeout(() => {
        setPetals((prev) => prev.filter((p) => p.id !== petal.id));
      }, petal.duration * 1000);
    };

    const interval = setInterval(createPetal, 1200); // less frequent

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="petal-wrapper">
      {petals.map((petal) => (
        <img
          key={petal.id}
          src="assets/flower_petals.png"
          className="petal"
          style={{
            left: `${petal.left}%`,
            width: petal.size,
            animationDuration: `${petal.duration}s`
          }}
        />
      ))}
    </div>
  );
}