import { Button } from '@material-ui/core';
import React, {useState, useEffect} from 'react'


const bord = {
  border: '30px solid #3d5a80',
  justifyContent:'flex-start',
  alignItems:'center',
  display:'flex',
  height: '80vh',
  flexDirection:'row'
};

function Events() {

  const [curItem, setCurItem] = useState(0);

  const [events, setEvents] = useState([
    {
      name:"Feb 23: Career Fair",
      time:"today ",
      description:"The ultimate one"
    }]);

  const handleClick= (id) => {
    setCurItem(id);
  }

  useEffect(() => {
    let temp = [
      {
        name:"Feb 23: Career Fair",
        time:"today ",
        description:"The ultimate one"
      },
      {
        name:"Feb 24: Career Fair",
        time:"right now ",
        description:"The ultimate one"
      },
      {
        name:"Feb 25: Career Fair"
      },{
        name:"Feb 26: Career Fair"
      },{
        name:"Feb 27: Career Fair"
      },
    ];
    setEvents(temp);
  },[])


  return (
    <div style={bord}>
        <div style={{display:'flex', flexDirection:'column', backgroundColor:'#3d5a80', height:'100%', width:'50%', alignItems:'center'}}>
          <h2 style={{color:'white'}}>Upcoming Events</h2>
          {
            events.map((item,key) => {
              return(
                <Button onClick={() => handleClick(key)}>{item.name}</Button>
              )
            })
          }          
        </div>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', padding:'50px'}}>
          <h2>{events[curItem].name}</h2>
        </div>
    </div>
  )
}

export default Events
