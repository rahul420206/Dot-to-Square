// Line.jsx
import React from 'react';

export default function Line({ from, to }) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const length = Math.sqrt(dx * dx + dy * dy);
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);

  return (
    <div
      className="line"
      style={{
        left: from.x,
        top: from.y,
        width: `${length}px`,
        transform: `rotate(${angle}deg)`
      }}
    />
  );
}