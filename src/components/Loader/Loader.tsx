import React, { useState } from 'react';
import type { MouseEvent as ReactMouseEvent, FC } from 'react';

import { cnLoader } from './Loader.classname';

import './Loader.css';

type LoaderProps = {
  // onMouseChange: (value: number) => void;
};

const Loader: FC<LoaderProps> = ({  }) => {
  const [value, setValue] = useState(0);
  const [down, setDown] = useState(false);

  const handleMouseDown = (event: ReactMouseEvent<HTMLDivElement, MouseEvent>) => {
    setDown(true);
    event.stopPropagation();
    event.preventDefault();
    console.log(event);

  };

  const handleMouseUp = (event: ReactMouseEvent<HTMLDivElement, MouseEvent>) => {
    setDown(false);
    event.stopPropagation();
    event.preventDefault();
    console.log(event);

  };

  const handleMouseMove = (event: ReactMouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    event.preventDefault();
    const target = event.target;
    console.log(event);


    if (!(target instanceof HTMLDivElement)) {
      throw new Error('Не тот target.');
    }
    
    let clientX = event.clientX;
    console.log(clientX, 'число смещения');
    const loaderWidth = target.offsetWidth;
    console.log(loaderWidth, 'ширина лоадера');
    let movementInPercent = (clientX / loaderWidth) * 100;
    console.log(movementInPercent, 'движение в %');


    if (down) {
      setValue(movementInPercent);
      console.log(value, 'value');


      // if (value <= 0) {
      //   setValue(0);
      // } else if (value >= 100) {
      //   setValue(100);
      // }
    }
  };



  return (
    <div className={cnLoader()}
        onMouseDown={handleMouseDown} 
        onMouseMove={handleMouseMove} 
        onMouseUp={handleMouseUp}
     >
      <div 
        className={cnLoader('Process')} 
        style={{ width: value + '%' }}
      >
      {Math.round(value)}
      </div>
    </div>
  )
};

export { Loader };
