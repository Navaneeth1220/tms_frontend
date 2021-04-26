import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import DisplayBookingDetails from "./DisplayBookingDetails"
import style from "./style.css"
import {findByIdAction} from "../../redux/bookingredux/findbyid/findByIdActions"

export default function FindBookingById({bookingId}){

    /*
    let mockBooking = {
        bookingId : 1,
        bookingType : "Trip",
        description : "family trip",
        bookingTitle : "Vacation",
        userId : 2
      };  */

      const currentState = useSelector (state => {
          return({
            booking : state.findById.booking,
            error : state.findById.error
          });
      })

      const dispatch = useDispatch();

      const findBookingOnRender = () =>{
          dispatch(findByIdAction(bookingId));
      }

      useEffect(findBookingOnRender,[]);

      return (

        <div>
            
            <h1>Booking Details</h1>

        {
            currentState.booking ? (
                <div>
                    <DisplayBookingDetails booking = {currentState.booking}/>
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
