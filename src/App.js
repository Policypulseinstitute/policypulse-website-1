import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './components/pages/Projects/Projects';
import Team from './components/pages/Team/Team';
import Contact from './components/pages/Contact/Contact';
import Project1 from './components/pages/Projects/Project1';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/team' component={Team} />
          <Route path='/contact' component={Contact} />
          <Route path='/project1' component={Project1} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
