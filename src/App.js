import React from 'react';
import { Route } from 'react-router-dom';

// baseline remove padding & margin from page
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

import Home from './components/';
import Resume from './components/Resume';
import Protfolio from './components/Protfolio';
import Contacts from './components/Contacts';;

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home}/>
      <Route path="/resume" component={Resume}/>
      <Route path="/protfolio" component={Protfolio}/>
      <Route path="/contacts" component={Contacts}/>
    </>
  )
}

export default App;
