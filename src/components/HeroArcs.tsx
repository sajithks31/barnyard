"use client";

export default function HeroArcs() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Circle 1 */}
      <div 
        className="absolute rounded-full border border-white/[0.08]"
        style={{
          width: '65vw',
          height: '65vw',
          minWidth: '800px',
          minHeight: '800px',
          top: '-25%',
          left: '25%',
        }}
      />
      
      {/* Circle 2 */}
      <div 
        className="absolute rounded-full border border-white/[0.08]"
        style={{
          width: '75vw',
          height: '75vw',
          minWidth: '900px',
          minHeight: '900px',
          top: '-15%',
          right: '-25%',
        }}
      />
    </div>
  );
}

