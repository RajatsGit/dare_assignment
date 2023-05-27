const SeatModel = require('../models/seatBooking')

const bookTicketController =async(req,res)=>{
    try {

        // Check if there are any seats in the database
  const existingSeats = await Seat.find();
  if (existingSeats.length === 0) {
    // If no seats exist, create 80 default seats
    const defaultSeats = [];
    for (let i = 1; i <= 80; i++) {
      defaultSeats.push({ seatNumber: `Seat ${i}` });
    }
    Seat.insertMany(defaultSeats)
      .then(() => {
        console.log('Default seats added successfully');
      })
      .catch((error) => {
        console.error('Error adding default seats:', error);
      });
  }






        // Number of seats that user requested
        const numberOfSeats = req.body.numberOfSeats;

        // These are the number of avlaible seats starting acsending order of seats
        const availableSeats = SeatModel.find({isBooked:false});

        // Check if requested seats are avaliable or not
        if(availableSeats.length >= numberOfSeats){
            const bookedSeats = availableSeats.slice(0, numberOfSeats);
          
        //   here simply booking seats and saving them in same function
            bookedSeats.forEach((seat)=>{
                seat.isBooked = true;
                seat.save();
            })

            return(
                res.status(200).send({
                    success:true,
                    message:'Seats Booked Succesfully'
                })
            )

        } else{
            return(
                res.status(200).send({
                    success:false,
                    message:'Requested Number Of Seats are not avalaible' 
                })
            )
        }


    } catch (error) {
        return(
            res.status(500).send({
                success:false,
                message:'Something Went Wrong!' 
            })
        )
    }
}

module.exports = {
    bookTicketController
}