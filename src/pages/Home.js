import { Button } from '@material-ui/core';
import React, {useState, useEffect} from 'react'
import { auth, db } from "../firebase/Firebase";
import RecHome from './RecHome';
import StudentHome from './StudentHome';

const btn = {
  margin:'20px',
  padding:'10px'
}

function Home() {
  const uid = auth().currentUser.uid;
  const [isHere, setIsHere] = useState(false);
  let show = <div></div>

  useEffect(() => {
    let stat = db.ref('userType');
    stat.on('value', (snapshot) => {
      const data = snapshot.val().data;
      if(data){
        data.map(id => {
          if(id === uid){
            setIsHere(true);
          }
        })
      }
      
    });

  },[]);

  const handleStudent = () => {
    show = <StudentHome />
    setIsHere(true);
    db.ref('userType').set({
      uid:'student'
    })

  }

  const handleRecruiter = () => {
    show = <RecHome />
    setIsHere(true);

    db.ref('userType').set({
      uid:'recruiter'
    })
  }

  return <RecHome />

  if(isHere === true){
    return show;
  }

  return (
    <div style={{height:'100vh', justifyContent:'center', alignItems:'center', display:'flex', backgroundColor:'gray'}}>
        <Button  style={btn} onClick={handleStudent}>Student</Button>
        <Button  style={btn} onClick={handleRecruiter}>Recruiter</Button>
    </div>
  )
}

export default Home
