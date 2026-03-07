'use client';
const FLOWER_COUNT = 40;

export default function FallingFlowers() {
    return (
         <div className="pointer-events-none fixed top-0 inset-0 z-50 overflow-hidden">
      {Array.from({ length: FLOWER_COUNT }).map((_, i) => (
        <span
          key={i}
          className="flower"
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 18 + 18}px`,
            animationDuration: `${Math.random() * 6 + 6}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
          
        >
        </span>
      ))}
    </div>
    );
}