// App.jsx
import React, { useState } from 'react';
import Dot from './components/Dot';
import Line from './components/Line';
import './App.css';

export default function App() {
  const [squares, setSquares] = useState([]);
  const [currentDots, setCurrentDots] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const newDot = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    if (currentDots.length === 4) {
      setSquares([...squares, currentDots]);
      setCurrentDots([newDot]);
    } else {
      setCurrentDots([...currentDots, newDot]);
    }
  };

  const handleReset = () => {
    setSquares([]);
    setCurrentDots([]);
  };

  return (
    <div>
      <button className="reset-button" onClick={handleReset}>Reset</button>
      <div className="drawing-area" onClick={handleClick}>
        {/* Completed Squares */}
        {squares.map((square, squareIdx) => (
          <React.Fragment key={`square-${squareIdx}`}>
            {square.map((dot, idx) => (
              <Dot key={`dot-${squareIdx}-${idx}`} x={dot.x} y={dot.y} />
            ))}
            {square.map((dot, idx) => {
              if (idx === 0) return null;
              return <Line key={`line-${squareIdx}-${idx}`} from={square[idx - 1]} to={dot} />;
            })}
            {square.length === 4 && (
              <Line key={`close-${squareIdx}`} from={square[3]} to={square[0]} />
            )}
          </React.Fragment>
        ))}

        {/* Current Dots & Lines */}
        {currentDots.map((dot, idx) => (
          <Dot key={`current-dot-${idx}`} x={dot.x} y={dot.y} highlight={idx === 3} />
        ))}
        {currentDots.map((dot, idx) => {
          if (idx === 0) return null;
          return <Line key={`current-line-${idx}`} from={currentDots[idx - 1]} to={dot} />;
        })}
        {currentDots.length === 4 && (
          <Line key="current-close" from={currentDots[3]} to={currentDots[0]} />
        )}
      </div>
    </div>
  );
}