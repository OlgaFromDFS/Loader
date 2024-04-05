import React, { useState } from 'react';
import type { FC, ChangeEvent } from 'react';

import { cnStupidLoader } from './StupidLoader.classname';

import './StupidLoader.css';

const StupidLoader: FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value))
  };

  return (
    <div className={cnStupidLoader()}>
      <div className={cnStupidLoader('Inner')} style={{  width: value + '%'}} />
      <input className={cnStupidLoader('Control')} value={value} onChange={ handleChange } type='range' min={0} max={100} step={1}/>
    </div>
  );
}

export { StupidLoader };
