import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import './App.css';
import { HashRouter as Router } from 'react-router-dom';

import Routes from './Routes';
import Logo from './components/template/Logo';
import Nav from './components/template/Nav';
import Footer from './components/template/Footer';

function App(props) {
  return (
    <Router>
      <div className="App">
        <Logo />
        <Nav />
        <Routes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
