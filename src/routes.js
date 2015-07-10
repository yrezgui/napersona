import React from 'react';
import Router, {Route, DefaultRoute}  from 'react-router';

import App      from './App';
import Me       from './Me';
import Homepage from './Homepage';
import Resume   from './Resume';
import Projects from './Projects';

// declare our routes and their hierarchy
export default (
  <Route handler={App}>
    <DefaultRoute handler={Homepage} />
    <Route path="me" handler={Me} />
    <Route path="resume" handler={Resume} />
    <Route path="projects" handler={Projects} />
  </Route>
);
