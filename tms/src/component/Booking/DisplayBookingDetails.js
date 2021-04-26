import style from '../../component/Booking/style.css';

export default function DisplayBookingDetails({booking}){

    let {bookingId,bookingType,description,bookingTitle,userId,packageId,paymentMode,bankName,cardNo,netAmount,paymentStatus,routeId}=booking;

    return (
       
       
       <div className={style.form}>
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
            Package id is {packageId}
        </div>
    );
}