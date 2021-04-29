import React, { useState } from "react";
import { useDispatch , useSelector} from "react-redux";
import DisplayBookingDetails from './DisplayBookingDetails';
import style from './style.css';
import {getBookingOnUserIdRequestAction} from '../../redux/bookingredux/getBookingOnUserIdRequest/getBookingOnUserIdRequestActions'
import DisplayBookingList from "./DisplayBookingList";



export default function GetBookingOnUserIdRequest() {
    
   

    const response = useSelector(state=>{
        return ({
            booking : state.getBookingOnUserIdRequest.booking,
            error : state.getBookingOnUserIdRequest.error
        });
    })

    const dispatch = useDispatch();

    const submitHandler = (event) => {

        event.preventDefault();
       
        dispatch(getBookingOnUserIdRequestAction(1));

    }

   

    return (
        <div>
            <h1> Booking History</h1>

            <div className={style.content}>
                <form onSubmit={submitHandler} className={style.content}>

                        
                <button className="btn btn-primary">Get Booking</button>
                </form>

                {response.booking ? (
                    <div>
                        <DisplayBookingList bookings={response.booking} />
                    </div>
                ) : ''}


                {
                    response.error ? (

                        <div className={style.error}>
                            Get Booking On Request Processing Unsuccessful
                            <br />
                            {response.error}

                        </div>
                    ) : ''

                }
            </div>
        </div>

    )

}