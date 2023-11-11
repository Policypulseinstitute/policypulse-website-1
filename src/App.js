import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Team from './components/pages/Team/Team';
import Contact from './components/pages/Contact/Contact';
import BackgroundComponent from './components/Background';
import MottoComponent from './components/MottoComponent'; 
import ScrollToTop from './components/ScrollTop';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/team' component={Team} />
          <Route path='/contact' component={Contact} />
          <Route path='/background' component={BackgroundComponent} /> 
          <Route path='/motto' component={MottoComponent} /> {/* 2. New Route for MottoComponent */}
        </Switch>
      </Router>
    </>
  );
}

export default App;

