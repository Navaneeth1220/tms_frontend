import React, { useState } from "react";
import { useDispatch , useSelector} from "react-redux";
import DisplayBookingDetails from './DisplayBookingDetails';
import style from './style.css';
import {getBookingOnUserIdRequestAction} from '../../redux/bookingredux/getBookingOnUserIdRequest/getBookingOnUserIdRequestActions'
import DisplayBookingList from "./DisplayBookingList";



export default function GetBookingOnUserIdRequest() {
    
    const userIdRef = React.createRef();

    const initialState = {userId : undefined};

    const [currentState, setNewState]= useState(initialState);

    const response = useSelector(state=>{
        return ({
            booking : state.getBookingOnUserIdRequest.booking,
            error : state.getBookingOnUserIdRequest.error
        });
    })

    const dispatch = useDispatch();

    const submitHandler = (event) => {

        event.preventDefault();
        console.log("current state", currentState);
        const userId = userIdRef.current.value;
        dispatch(getBookingOnUserIdRequestAction(userId));

    }

    const setFieldState = () => {

        const userIdValue = userIdRef.current.value;
        const newState = { ...currentState, userId: userIdValue, booking: undefined, errMsg: undefined };
        setNewState(newState);
        console.log("inside set field state ");
    }

    return (
        <div>
            <h1> Booking History</h1>

            <div className={style.content}>
                <form onSubmit={submitHandler} className={style.content}>

                    <div className="form-group">
                        <label>Enter User Id</label>

                        <input name="userId" type="number" ref={userIdRef} onChange={setFieldState} className="form-control"/>
                    </div>

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