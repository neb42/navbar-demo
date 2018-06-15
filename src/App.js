import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Navbar from './components/Navbar';
import * as Styles from './App.styles';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Styles.Container>
          <Navbar />
          <Routes />
        </Styles.Container>
      </BrowserRouter>
    );
  }
};
