import {findById} from "../../../service/Booking/BookingService";
import store from "../../store";
import getBookingOnRequestConstants from "./getBookingOnRequestConstants";

function getBookingOnRequestSuccess(booking){

    return ({
        type:getBookingOnRequestConstants.success,
        booking : booking,
        error : ''
    });
}

function getBookingOnRequestFail(error){

    return ({
        type:getBookingOnRequestConstants.fail,
        booking: undefined,
        error : console.error
    });
}

function getBookingOnRequestAction (bookingId){
    return ()=> {
        const promise = findById(bookingId);
        promise.then((response)=>{
            
            const booking = response.data;
            const actionObj = getBookingOnRequestSuccess(booking);
            store.dispatch(actionObj);

        }).catch(error =>
            {
                const actionObj = getBookingOnRequestFail(error.message);
                store.dispatch(actionObj);
            }) 
    }
}

export {getBookingOnRequestSuccess , getBookingOnRequestFail , getBookingOnRequestAction};