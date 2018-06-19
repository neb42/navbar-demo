import React from 'react';
import apps from './apps.png';

const style = {
  height: '100vh',
  width: 'calc(100vw - 70px)',
};

const Apps = () => (
  <img style={style} src={apps} />
);

export default Apps;
