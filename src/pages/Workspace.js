import React from 'react';
import workspace from './workspace.png';

const style = {
  height: '100vh',
  width: 'calc(100vw - 70px)',
};

const Workspace = () => (
  <img style={style} src={workspace} />
);

export default Workspace;
