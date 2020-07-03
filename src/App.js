import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import HeaderAssembly from './components/header/HeaderAssembly';
import AboutPage from './components/aboutPage/AboutPage';
import ProjectsPage from './components/projectsPage/ProjectsPage';

import './assets/scss/main.scss';

function App() {
  return (
    <Router>
      <HeaderAssembly />
      <Switch>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/portfolio">
          <ProjectsPage />
        </Route>
        <Route path="/">
          <AboutPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
