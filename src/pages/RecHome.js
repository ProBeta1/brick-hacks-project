import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Button } from '@material-ui/core';
import Account from '../recruiter/Account';
import Settings from '../recruiter/Settings';
import Events from '../recruiter/Events';

const btn = {
  color:'white',
  fontColor:'white',
  textDecoration:'none'
}

const btnCover = {
  paddingLeft:'50px',
  paddingRight:'50px',
}

function RecHome() {
  return (
    <Router>
      <div>
        <nav style={{display:'flex',flexDirection:'row', justifyContent:'flex-end', alignItems:'center', padding:'20px', backgroundColor:'#EE6C4D'}}>
            <Button style={btnCover} >              
              <Link style={btn} to="/account">Account</Link>
            </Button>
            <Button style={btnCover}>              
              <Link style={btn} to="/settings">Settings</Link>
            </Button>
            <Button style={btnCover}>              
              <Link style={btn} to="/">Events</Link>
            </Button>
        </nav>

        <Switch>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/">
            <Events />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default RecHome
