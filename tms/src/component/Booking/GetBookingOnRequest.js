import React, { useState } from "react";
import { useDispatch , useSelector} from "react-redux";
import DisplayBookingDetails from './DisplayBookingDetails';
import style from './style.css';
import {getBookingOnRequestAction} from '../../redux/bookingredux/getbookingonrequest/getBookingOnRequestActions'


export default function GetBookingOnRequest() {
    
    const bookingIdRef = React.createRef();

    const initialState = {bookingId : undefined};

    const [currentState, setNewState]= useState(initialState);

    const response = useSelector(state=>{
        return ({
            booking : state.getBookingOnRequest.booking,
            error : state.getBookingOnRequest.error
        });
    })

    const dispatch = useDispatch();

    const submitHandler = (event) => {

        event.preventDefault();
        console.log("current state", currentState);
        const bookingId = bookingIdRef.current.value;
        dispatch(getBookingOnRequestAction(bookingId));

    }

    const setFieldState = () => {

        const bookingIdValue = bookingIdRef.current.value;
        const newState = { ...currentState, bookingId: bookingIdValue, booking: undefined, errMsg: undefined };
        setNewState(newState);
    }

    return (
        <div>
            <h1> Get Booking Details On Request</h1>

            <div className={style.content}>
                <form onSubmit={submitHandler} className={style.content}>

                    <div className="form-group">
                        <label>Enter BookingId</label>

                        <input name="bookingId" type="number" ref={bookingIdRef} onChange={setFieldState} className="form-control"/>
                    </div>

                    <button className="btn btn-primary">Get Booking</button>
                </form>

                {response.booking ? (
                    <div>
                        <DisplayBookingDetails booking={response.booking} />
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