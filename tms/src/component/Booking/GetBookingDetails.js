import React, { useState } from "react"
import DisplayBookingDetails from "./DisplayBookingDetails"
import errorStyle from "./errorStyle.module.css"

export default function GetBookingDetails(){


    let mockBooking = {
        bookId : 1,
        type : "Trip",
        description : "family trip",
        title : "Vacation",
        userId : 2
      };

      const bookingIdRef = React.createRef();

      const initialState = {bookId : undefined, booking : mockBooking , errorMsg:undefined};

      const [currentState , setNewState] = useState(initialState);

      const submitHandler = (event) =>{
          event.preventDefault();
          let formData={...currentState};
        console.log("form data that has to be sent to service",formData);
      }

      const setFieldState=()=>{
          const bookingIdValue = bookingIdRef.current.value;
          const newState={...currentState,bookId:bookingIdValue};
          setNewState(newState);
      }

      return (

        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label> Enter Booking ID</label>
                    <input name="bookingId" type="number" ref={bookingIdRef} onChange={setFieldState} />
                    <button>Get Booking Details</button>
                </div>
            </form>

        {
            currentState.booking ? (
                <div>
                    <DisplayBookingDetails book = {currentState.booking}/>
                </div>
            ) : ""
        }

        {
            currentState.errorMsg ? (
                <div className={errorStyle.error}>
                    Booking Details request Failed
                    <br/>
                    {currentState.errorMsg}
                </div>

            ) : ""
        }
        

        </div>


      );

}
