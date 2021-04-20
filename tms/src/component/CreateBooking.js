import { useDebugValue } from "react";
import React, { useState } from "react";
import DisplayBookingDetails from "./DisplayBookingDetails";
import errorStyle from "./errorStyle.module.css"


export default function CreateBooking(){

    /*const booking1 = {
        bookingTitle : "weekend",
        bookingType : "Executive",
        bookingDescription :"Expensive",
        userId : 1
    }*/

    const bookingTitleRef = React.createRef();
    const bookingTypeRef = React.createRef();
    const bookingDescriptionRef = React.createRef();
    const userIdRef = React.createRef();

    const initialState = {
        bookingType : undefined,
        bookingTitle : undefined,
        bookingDescription : undefined,
        userId : undefined,
        booking : undefined,
        errMsg : undefined,
        formStatus : "",
    };

    const [currentState,setNewState] = useState(initialState);

    const submitHandler = (event) =>{
        event.preventDefault();
        setNewState({...currentState,formStatus:"Form submitted"});
    };

    const setFieldState = (ref) =>{
        const fieldName = ref.current.name;
        const fieldValue = ref.current.value;
        console.log("inside set field state field name = "+fieldName+" fieldValue= "+fieldValue);
        const newState = {

            ...currentState,
            [fieldName] : fieldValue,
            booking : undefined,
            errMsg : undefined,
        };

        setNewState(newState);
    }

    return (
        <div>
            <form onSubmit = {(event)=> submitHandler(event)}>
                <div>
                    <label>Choose a Booking title </label>
                    <select name = "bookingTitle" id = "title" ref={bookingTitleRef} onChange={()=>setFieldState(bookingTitleRef)}>  
                        <option value="weekend">Weekend</option>
                        <option value = "week_vacation">7 day Vacation</option>
                    </select>
                    
                </div>
                <div>
                    <label>Choose Booking Type </label>
                    <select name="bookingType" id="type" ref={bookingTypeRef} onChange={()=>setFieldState(bookingTypeRef)}>
                        <option value="economy">Economy</option>
                        <option value="executive">Executive</option>
                </select>
                </div>
                <div>
                    <label>Description </label>
                    <input name="bookingDescription" type="text" ref={bookingDescriptionRef} onChange={()=>setFieldState(bookingDescriptionRef)}/>
                </div>
                <div>
                    <label>Enter your User Id</label>
                    <input name="userId" type="number" ref={userIdRef} onChange={()=>setFieldState(userIdRef)}/>
                    <br/>
                    <button type="submit">Make Booking</button>
                </div>
            </form>

            <h2>{currentState.formStatus}</h2>


            {
                currentState.booking ? (

                    <div>
                        <h2>Booking successful</h2>
                        <DisplayBookingDetails booking = {currentState.booking}/>
                    </div>
                ) : ""
            }

            {
                currentState.errMsg ? (
                    <div className={errorStyle.error}>

                        {currentState.errMsg}
                    </div>
                ) : ""

            }
        </div>

    );
}