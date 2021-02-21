import { Button } from '@material-ui/core';
import React, {useState, useEffect} from 'react'
import { auth, db, ft } from "../firebase/Firebase";
import RecHome from './RecHome';
import StudentHome from './StudentHome';

const btn = {
  margin:'20px',
  padding:'10px'
}

function Home() {
  const uid = auth().currentUser.uid;
  const [isHere, setIsHere] = useState(false);
  const [show, setShow] = useState(<div></div>)

  useEffect(() => {

    ft.collection(uid).doc('type').get().then(item => {
      if(item){
        console.log("one more chance")
        //setIsHere(true);
      }
    })

  },[]);

  const handleStudent = () => {
    setShow(<StudentHome />);
    setIsHere(true);
    ft.collection(uid).doc('type').set({
      category:'student'
    });

  }

  const handleRecruiter = () => {
    setShow(<RecHome />)
    setIsHere(true);

    ft.collection(uid).doc('type').set({
      category:'recruiter'
    });
  }

  if(isHere === true){
    return show;
  }

  return (
    <div style={{height:'100vh', justifyContent:'center', alignItems:'center', display:'flex', backgroundImage:`url(https://i.pinimg.com/originals/c9/97/81/c99781a0ab356681cb038f70b1df68f1.jpg)`}}>
        <Button variant="contained"  style={btn} onClick={handleStudent}>Student</Button>
        <Button variant="contained" style={btn} onClick={handleRecruiter}>Recruiter</Button>
    </div>
  )
}

export default Home
