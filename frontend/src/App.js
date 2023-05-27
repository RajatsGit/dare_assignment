
import { Box, Button, TextField, Typography } from '@mui/material';
import './App.css';
import { useState } from 'react';
import axios from 'axios'

function App() {
  const [numberOfSeats,setNumberOfSeats] = useState(0);
  const [bookedSeats, setBookedSeats] = useState([]);

 const handleBookTickets =async(e)=>{
  e.preventDefault();
  try {
    const response = await axios.post('https://unstop-assignment-backend.onrender.com/api/seat/bookTickets',{
      numberOfSeats
    });
    if(response.data.success){
      setBookedSeats([...response.data.data])
    }
  } catch (error) {
    
  }
  
}




  return (
    <Box sx={{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'column',
      mt:'3rem'
    }}>
        <Typography sx={{
          fontSize:'3rem'
        }}>Book Your Tickets</Typography>


        <form onSubmit={handleBookTickets}>
          <Box
          sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'column',
            gap:'2rem',
            mt:'3rem'
          }}>
        <TextField 
        onChange={(e)=> setNumberOfSeats(e.target.value)}
        type='number'
        // InputProps={{minValue:0,maxValue:7}}
        id="outlined-basic" 
        inputProps={{min:1,max:7}}
        label="Enter the Number of Seats to book" variant="outlined" required sx={{
          width:'20rem'
        }}/>

        {
          (numberOfSeats === 0 || numberOfSeats ==='')
          ?
          <Button 
          disabled
          sx={{
            bgcolor:'grey',
            color:'gold',
            p:'1rem',
           
            
            
          }}>
              Book Ticket !!
          </Button>
          :
          <Button 
          type='submit'
          sx={{
            bgcolor:'#0a2640',
            color:'white',
            p:'1rem',
            '&:hover':{
              bgcolor:'green',
              color:'white',
            }
          }}>
              Book Ticket !!
          </Button>
        }
        
          </Box>


        </form>

        <Box sx={{
          display:'flex',
          alignItems:'center',
          justifyContent:'center'
        }}>
          {bookedSeats && <Typography>Your Booked Seat Numbers are:-</Typography>}
           {
            bookedSeats && (

              bookedSeats.map((seat) => (
                <Box sx={{
                  m:'1rem'
                }}>{seat.seatNumber}</Box>
                )
            ))
           }
        </Box>
    </Box>
  );
}

export default App;
