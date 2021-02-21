import React, { useEffect, useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {auth} from './firebase/Firebase';
import Grid from '@material-ui/core/Grid';
import Home from "./pages/Home"

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  signInOptions: [
    auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  if (!isSignedIn) {
    return (
      <div style={{justifyContent:'center', alignItems:'center', height:'100vh',backgroundImage: `url("https://media2.giphy.com/media/yoJC2zZXY7tQLU42ZO/200w.webp?cid=ecf05e47n27qk5wd2b3kkbyrg1xwvrx8ilc14os67q708tjh&rid=200w.webp")`,  backgroundSize: 'cover',
    }}>
        <Grid container justify="center" alignContent="center" style={{height:'100vh', flexDirection:'column'}}  >
          <Grid item style={{color:'#ee6c4d', fontSize:'50px', fontWeight:'bold'}}>
            Lets Sign you up
          </Grid>
          <Grid item>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth()} />
          </Grid>
        </Grid>

      </div>
    );
  }
  return (
    <div>
        <Home/>
    </div>
  );
}

export default App;