import React from 'react';
import './App.css';
import Home from './components/Screens/Home'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import routes from './config/routes'
import ProjectDetails from "./components/Screens/Projects/ProjectDetails";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route exact path={routes.root} component={Home}/>
                <Route path={`${routes.projectDetails}/:pid`} component={ProjectDetails}/>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
