import React from 'react';
import Notes from './components/createNote/Notes'
import ReadNotes from './components/readNote/ReadNotes'
import EditNotes from './components/editNote/EditNote'


import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

function App () {
  return(
    <BrowserRouter>
       <Switch>
          <Route exact path="/">
            <ReadNotes />
          </Route>
          <Route exact path="/write">
            <Notes />
          </Route>
          <Route exact path="/edith:id">
            <EditNotes />           
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;