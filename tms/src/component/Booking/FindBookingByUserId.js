import React, { useState } from "react"
import DisplayBookingDetails from "./DisplayBookingDetails"
import style from "./style.css"

export default function FindBookingByUserId({userId}){

    /*
    let mockBooking = {
        bookingId :1,
        bookingTitle : "Vacation",
        bookingType :"Economy",
        description : "Family trip",
        packageId : 10,
        paymentMode : "card",
        bankName : "SBI",
        cardNo : 123456789,
        netAmount : 1000.0,
        paymentStatus : "true",
        routeId : "4fc9a735-5c61-468b-b0a5-a11dc11c1ad3"
      }; */

      const currentState = useSelector (state => {
        return({
          booking : state.findByUserId.booking,
          error : state.findByUserId.error
        });
    })

    const dispatch = useDispatch();

      const findBookingOnRender = () =>{
          dispatch(findByUserIdAction(userId));
      }

      useEffect(findBookingOnRender,[]);

      

      return (

        <div>
            
            <h1>Booking Details</h1>

        {
            currentState.booking ? (
                <div>
                    <DisplayBookingList bookings = {currentState.booking}/>
                </div>
            ) : ""
        }

        {
            currentState.errorMsg ? (
                <div className={style.error}>
                    Booking Details request Failed
                    <br/>
                    {currentState.errorMsg}
                </div>

            ) : ""
        }
        

        </div>



      );

}
