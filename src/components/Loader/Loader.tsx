import React, { useState } from 'react';
import type { MouseEvent as ReactMouseEvent, FC } from 'react';

import { cnLoader } from './Loader.classname';

import './Loader.css';

type LoaderProps = {
  onChange: (value: number) => void;
  value: number;
};

const Loader: FC<LoaderProps> = ({ onChange, value }) => {
  const [down, setDown] = useState(false);
  const [locked, setLocked] = useState(false);

  const handleMouseDown = () => {
    setDown(true);
  };

  const handleMouseUp = () => {
    setDown(false);
  };

  const handleMouseLeave = () => {
    setDown(false);
  };
  
  const handleMouseMove = (event: ReactMouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = event.currentTarget;

    if (!(target instanceof HTMLDivElement)) {
      throw new Error('Не тот target.');
    }
    
    let clientX = event.clientX;
    const loaderWidth = target.offsetWidth;
    let movementInPercent = (clientX / loaderWidth) * 100;

    if (movementInPercent === 100) {
      setLocked(true);
    }
    
    if (movementInPercent <= 0) {
      movementInPercent = 0;
    } else if (movementInPercent >= 100) {
      movementInPercent = 100;
    }

    if (down) {
      onChange(movementInPercent);
    }
  };

  return (
    <div className={cnLoader()}
        onMouseDown={handleMouseDown} 
        onMouseMove={locked ? undefined : handleMouseMove} 
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
     >
      <div 
        className={cnLoader('Progress')} 
        style={{ width: value + '%' }}
      >
      {Math.round(value)}
      </div>
    </div>
  )
};

export { Loader };
