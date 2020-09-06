import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';
import PostDetails from './Components/PostDetails/PostDetails';

function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route path="/home">
            <Home/>
          </Route>
          <Route path="/post/:postId">
            <PostDetails/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path ="*">
             <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
