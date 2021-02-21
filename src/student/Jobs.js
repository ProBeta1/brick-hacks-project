import { Button } from '@material-ui/core';
import React, {useState} from 'react'
const btn = {
  margin:'10px',
  padding:'10px'
}
function Jobs() {

  const [inqueue, setInQueue] = useState(0);

  return (
    <div>
      <h2 style={{color:'#3d5a80', padding:'30px'}}>Event Happenning Now : Career Fair</h2>

      <div>
        <div style={{display:'flex', flexDirection:'row' }}>
          <h3 style={{margin:'30px'}}>Dolby.io</h3>
          <h3 style={{margin:'30px'}}> {inqueue} waiting</h3>
          <Button style={btn}>Join queue</Button>
        </div>
      </div>
    </div>
  )
}

export default Jobs
