import { Button } from '@material-ui/core';
import React, {useState, useEffect} from 'react'


const bord = {
  border: '30px solid #3d5a80',
  justifyContent:'center',
  alignItems:'center',
  display:'flex',
  height: '70vh',
};

function Events() {

  const [events, setEvents] = useState([
    {
      name:"Feb 23: Career Fair"
    },
    {
      name:"Feb 23: Career Fair"
    }
  ]);


  return (
    <div style={bord}>
        <div>
          <h2>Upcoming Events</h2>
          {
            events.map(item => {
              <Button>{item.name}</Button>
            })
          }          
        </div>
    </div>
  )
}

export default Events
