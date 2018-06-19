import React from 'react';
import environments from './environments.png';

const style = {
  height: '100vh',
  width: 'calc(100vw - 70px)',
};

const Environments = () => (
  <img style={style} src={environments} />
);

export default Environments;
