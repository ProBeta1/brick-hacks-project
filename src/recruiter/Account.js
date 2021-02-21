import { Button } from '@material-ui/core';
import React, {useEffect, useState} from 'react'
import VideoCall from '../components/VideoCall';
import {  ft } from '../firebase/Firebase';


function Account() {
  const [cands, setCands] = useState([]);
  const [onCall, setOnCall] = useState(false);
  const [idList, setIdList]= useState([]);

  useEffect(() => {
    ft.collection('dolby').get().then(snap => {
      let temp = [];
      let tid = [];
      snap.forEach((doc) => {
        tid.push(doc.d_.id);
        temp.push(doc.data());
      })
      setCands(temp);
      setIdList(tid);
    })
  },[onCall]);

  const handleStart = () => {
    //create a new meeting and invite the cand
    if(cands){
      setOnCall(true);
    }
  }

  const handleLeave = () => {
    if(onCall){
      setOnCall(false);
      let temp = cands;
      temp.shift();
      setCands(temp);
      ft.collection('dolby').doc(idList[0]).delete().then(() => {
        let tid = idList;
        idList.shift();
        setIdList(tid);
      })
    }
  }



  return (
    <div  style={{display:'flex', height:'80vh', border:'40px solid #3d5a80', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
        <h2 style={{color:'#3d5a80', padding:'30px'}}>Event Happenning Now : Career Fair</h2>
        <Button onClick={handleStart} color="secondary" variant="contained">
          {
            onCall === false?
            <p>Start Meeting</p> :
            <p>On a Call</p>
          }
        </Button>
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

    {
      onCall === true ?
      <VideoCall id={cands[0].uid} handleLeave={handleLeave} />
      :
      <></>
    }

   </div>
  )
}

export default Account
