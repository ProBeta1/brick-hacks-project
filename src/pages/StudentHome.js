import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Button } from '@material-ui/core';

import Jobs from "../student/Jobs";
import Events from "../student/Events";
import Employers from "../student/Employers";
import Logout from '../components/Logout';

const btn = {
  color:'white',
  fontColor:'white',
  textDecoration:'none'
}

const btnCover = {
  paddingLeft:'50px',
  paddingRight:'50px',
}


function StudentHome() {
  return (
    <Router>
      <div>
        <nav style={{display:'flex',flexDirection:'row', justifyContent:'flex-end', alignItems:'center', padding:'20px', backgroundColor:'#EE6C4D'}}>
            <Button style={btnCover} >              
              <Link style={btn} to="/jobs">Jobs</Link>
            </Button>
            <Button style={btnCover}>              
              <Link style={btn} to="/employers">Employers</Link>
            </Button>
            <Button style={btnCover}>              
              <Link style={btn} to="/">Events</Link>
            </Button>
            <Button style={btnCover}>              
              <Link style={btn} to="/logout">Logout</Link>
            </Button>
        </nav>

        <Switch>
          <Route path="/jobs">
            <Jobs />
          </Route>
          <Route path="/employers">
            <Employers />
          </Route>
          <Route path="/">
            <Events />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default StudentHome
