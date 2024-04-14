import React, { useState } from 'react';
import type { FC } from 'react';

import { cnGeneral } from './General.classname';

import './General.css';

import { Loader } from '../Loader/Loader';
import { Image } from '../Image/Image';

const General: FC = () => {
  const [value, setValue] = useState(0);

  const handleChangeValue = (value: number) => {
    setValue(value);
  };

  return (
    <div className={cnGeneral()}>
      <Loader onChange={handleChangeValue} value={value} />
      {value === 100 && <Image />}
    </div>
  )
};

export { General };
