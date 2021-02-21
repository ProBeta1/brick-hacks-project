import { Button } from '@material-ui/core';
import React, {useEffect, useState} from 'react'
import { auth,  ft } from '../firebase/Firebase';
import Waiting from './Waiting';

const btn = {
  margin:'10px',
  padding:'10px'
}
function Jobs() {

  const [inqueue, setInQueue] = useState(0);
  const [requested, setRequested] = useState(false);

  const handleJoin = () => {
    ft.collection('dolby').add({
      name:auth().currentUser.displayName,
      uid:auth().currentUser.uid,
    });

    setRequested(true);
  }

  useEffect(() => {
    ft.collection('dolby').get().then((snap) => {
      setInQueue(snap.size)
    })
  },[]);

  if(requested === true){
    return <Waiting count={inqueue} />
  }

  return (
    <div style={{ border:'40px solid #3d5a80', justifyContent:'center', alignItems:'center',display:'flex', height:'80vh', flexDirection:'column'}}>
      <h2 style={{color:'#3d5a80', padding:'30px'}}>Event Happenning Now : Career Fair</h2>

      <div>
        <div style={{display:'flex', flexDirection:'row' }}>
          <h3 style={{margin:'30px'}}>Dolby.io</h3>
          <h3 style={{margin:'30px'}}> {inqueue} waiting</h3>
          <Button onClick={handleJoin} style={btn}>Join queue</Button>
        </div>
      </div>
    </div>
  )
}

export default Jobs
