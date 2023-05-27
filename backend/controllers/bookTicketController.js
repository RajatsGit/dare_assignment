const SeatModel = require('../models/seatBooking')

const bookTicketController =async(req,res)=>{
    try {
        // Number of seats that user requested
        const numberOfSeats = req.body.numberOfSeats;

        // These are the number of avlaible seats starting acsending order of seats
        const availableSeats = SeatModel.find({isBooked:false});

        // Check if requested seats are avaliable or not
        if(availableSeats.length >= numberOfSeats){
            const bookedSeats = availableSeats.slice(0, numberOfSeats);
            

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