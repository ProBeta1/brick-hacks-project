import React, {useEffect} from 'react'
import App from '../App';
import { auth } from '../firebase/Firebase';

function Logout() {
  useEffect(() => {
    auth.signOut();
  },[]);

  return (
    <div>
      alright
      </div>
  )
}

export default Logout
