export default function DisplayBookingDetails({book}){

    let {bookId,type,description,title,userId} = book;

    return (
       
       
       <div>
            Booking id is {bookId}
            <br/>
            Booking type is {type}
            <br/>
            Booking description is {description}
            <br/>
            Booking title is {title}
            <br/>
            Booking user Id is {userId}
            <br/>
        </div>
    );
}