import React from 'react';
import type { FC } from 'react';

import { cnGeneral } from './General.classname';

import './General.css';

import { Loader } from '../Loader/Loader';
import { Image } from '../Image/Image';
import { StupidLoader } from '../StupidLoader/StupidLoader';

const General: FC = () => {
  return (
    <div className={cnGeneral()}>
      <Loader />
      <Image />
      <StupidLoader />
    </div>
  );
}

export { General };
