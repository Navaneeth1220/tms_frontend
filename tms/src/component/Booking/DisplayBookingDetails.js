export default function DisplayBookingDetails({book}){

    let {bookingId,bookingType,description,bookingTitle,userId} = book;

    return (
       
       
       <div>
            Booking id is {bookingId}
            <br/>
            Booking type is {bookingType}
            <br/>
            Booking description is {description}
            <br/>
            Booking title is {bookingTitle}
            <br/>
            Booking user Id is {userId}
            <br/>
        </div>
    );
}