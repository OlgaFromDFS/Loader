import React from 'react';
import type { FC } from 'react';

import { cnImage } from './Image.classname';

import './Image.css';

const Image: FC = () => {
  return (
    <img className={cnImage()} src='https://polinka.top/uploads/posts/2023-05/1684873907_polinka-top-p-ura-kartinka-radost-vkontakte-23.jpg'/>
  );
}

export { Image };
