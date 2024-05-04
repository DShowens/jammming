import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';

// Router is used to wrap the entire JSX return code.
// Switch is located at the area below the Navbar to change just the body content
// Route is for each page change location (example: Home, Contact, FAQ, etc.)
    // Add "exact" (prop) before "path" to avoid "/" picking up for "/create"

function App() {

  return (
    <Router>  
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/"> 
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
