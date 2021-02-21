import { Button } from '@material-ui/core';
import React, {useEffect, useState} from 'react'
import { auth, db, ft } from '../firebase/Firebase';
const btn = {
  margin:'10px',
  padding:'10px'
}

function Account() {
  const [cands, setCands] = useState([]);

  useEffect(() => {
    ft.collection('dolby').get().then(snap => {
      let temp = [];
      snap.forEach((doc) => {
        temp.push(doc.data());
      })
      setCands(temp);
    })
  },[]);

  const handleStart = () => {
    //create a new meeting and invite the cand
  }

  return (
    <div  style={{display:'flex', height:'80vh', border:'40px solid #3d5a80', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
        <h2 style={{color:'#3d5a80', padding:'30px'}}>Event Happenning Now : Career Fair</h2>
        <Button onClick={handleStart} color="secondary" variant="contained">Start Meeting</Button>
      </div>
    <div>
      {cands.map((item,id) => {
        return(
          <div>
            <h3>{id+1} : {item.name}</h3>
          </div>
        )
      })}
    </div> 

   </div>
  )
}

export default Account
