import { useDebugValue } from "react";
import React, { useState } from "react";
import DisplayBookingDetails from "./DisplayBookingDetails";
import style from "./style.css"
import validationMessage from './validationMessage';
import { useSelector , useDispatch} from "react-redux";
import { addBooking } from "../../service/Booking/BookingService";
import {addBookingAction} from "../../redux/bookingredux/addBooking/addBookingActions"

export default function AddBooking(){

    /*const booking = {
        bookingTitle : "weekend",
        bookingType : "Executive",
        description :"Expensive",
        bookingId:545,
        userId : 4,
        packageId : 1,
        paymentMode : "Card",
        bankName : "SBI",
        cardNo : 12345678,
        netAmount : 1000,
        paymentStatus : "true",
        routeId : "R1"
    }; */

    const bookingTitleRef = React.createRef();
    const bookingTypeRef = React.createRef();
    const bookingDescriptionRef = React.createRef();
    const packageIdRef = React.createRef();
    const paymentModeRef = React.createRef();
    const bankNameRef = React.createRef();
    const cardNoRef = React.createRef();
    

    const initialState = {
        bookingType : undefined,
        bookingTitle : undefined,
        description : undefined,
        userId : 1,
        packageId : 8,
        paymentMode : undefined,
        bankName : undefined,
        cardNo : undefined,
        netAmount : 1000.0,
        paymentStatus : "true",
        routeId : "R1",
        validations : {cardNo:undefined, bankName:undefined},
    };

    

   


    const [currentState,setNewState] = useState(initialState);

    const response= useSelector(state =>{
            return (
                {
                    booking : state.addBooking.booking,
                    error : state.addBooking.error
                }
            );
    });

    const dispatch  = useDispatch();



    const submitHandler = (event) =>{
        event.preventDefault();
//        setNewState({...currentState,formStatus:"Form submitted"});

        if(currentState.validations.cardNo || currentState.validations.bankName){
            return;
        }        
        
        const packageId = parseInt(currentState.packageId);
        
        
        let data={...currentState,packageId:packageId};
        console.log("form data that has to be sent to service",data);
        dispatch(addBookingAction(data));
    };

    const setFieldState = (ref) =>{
       
        

        const fieldName = ref.current.name;
        const fieldValue = ref.current.value;
        console.log("inside set field state field name = "+fieldName+" fieldValue= "+fieldValue);

       

        let validationMsg;

        if (ref===cardNoRef){
            validationMsg= validateCardNo(fieldValue);
        }

        if(ref===bankNameRef){
            validationMsg=validateBankName(fieldValue);
        }

        const newValidations = { ...currentState.validations, [fieldName]: validationMsg };

        const newState = {
           
            
            ...currentState,
            [fieldName] : fieldValue,
            errMsg : undefined,
            validations : newValidations
        };

        setNewState(newState);
    };

    const validateCardNo = (cardNo)=>{
        if(cardNo.length!==16){
            return validationMessage.cardNoIsInvalid;
        }
        return undefined;
    }

    const validateBankName = (bankName)=>{
        if(bankName.length<3){
            return validationMessage.bankNameIsInvalid;
        }
        return undefined;
    }

    return (
        <div>
            <form onSubmit = {(event)=> submitHandler(event)} className={style}>
                <div className="form-group">
                    <label>Booking title </label>
                    <select name = "bookingTitle" id = "title" required ref={bookingTitleRef} onChange={()=>setFieldState(bookingTitleRef)} className="form-control"  > 
                    <option value="none" disabled selected hidden>Select booking Title</option> 
                        <option value="weekend">Weekend</option>
                        <option value = "week_vacation">7 day Vacation</option>
                    </select>
                    
                </div>
                <div className="form-group">
                    <label>Booking Type </label>
                    <select name="bookingType" id="type" ref={bookingTypeRef} onChange={()=>setFieldState(bookingTypeRef)} className="form-control" required>
                        <option value="none" disabled selected hidden>Select booking Type</option>
                        <option value="economy">Economy</option>
                        <option value="executive">Executive</option>
                </select>
                </div>
                <div className="form-group">
                    <label>Description </label>
                    <textarea name="description" type="text" ref={bookingDescriptionRef} onChange={()=>setFieldState(bookingDescriptionRef)} className="form-control" required/>
                </div>

                {
                <div className="form-group">
                    <label>Package </label>
                    <select name="packageId"  ref={packageIdRef} onChange={()=>setFieldState(packageIdRef)} className="form-control" required>
                        <option value="none" disabled selected hidden>Select package</option>
                        <option value="10">Goa trip</option>
                        <option value="8">Andaman Trip</option>
                    </select>
                     <br/>
                </div> }

                <div className="form-group">
    
                    <label>Amount </label>
                    <input name="netAmount" type="number"  className="form-control" disabled/>
                </div>

                <div className="form-group">
                    <label>Payment Mode </label>
                    <select name="paymentMode" ref={paymentModeRef} onChange={()=>setFieldState(paymentModeRef)} className="form-control" required>
                        <option value="" disabled selected hidden>Payment mode</option>
                        <option value="debitCard">Debit Card</option>
                        <option value="creditCard">Credit Card</option>
                    </select>

                </div>
                <div className="form-group">
    
                    <label>Card No </label>
                    <input name="cardNo" type="number" ref={cardNoRef} onChange={()=>setFieldState(cardNoRef)} className="form-control" required/>
                   {currentState.validations.cardNo ? (
                        <div className={style.error}>
                            {currentState.validations.cardNo}
                        </div>
                    ) : (
                        ""
                    )}
                </div>

                <div className="form-group">
                    <label>Bank name </label>
                    <input name="bankName" ref={bankNameRef} onChange={()=>setFieldState(bankNameRef)} className="form-control" required/>
                    {currentState.validations.bankName ? (
                        <div>
                            {currentState.validations.bankName}
                        </div>
                    ) : (
                        ""
                    )}
                    <br/>
                    <button className="btn btn-primary" type="submit">Make Booking</button>
                </div>
            </form>

            <h2>{currentState.formStatus}</h2>


            {
               response.booking ? (

                    <div>
                        <h2>Booking successful</h2>
                      {  <DisplayBookingDetails booking = {response.booking}/>}
                    </div>
                ) : ""
            }

            {
                response.errMsg ? (
                    <div className={style.error}>

                        {response.errMsg}
                    </div>
                ) : ""

            }
        </div>

    );
}