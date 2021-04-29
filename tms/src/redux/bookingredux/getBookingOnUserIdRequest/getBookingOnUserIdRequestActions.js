import {findByUserId} from "../../../service/Booking/BookingService";
import store from "../../bookingredux/store";
import getBookingOnUserIdRequestConstants from "./getBookingOnUserIdRequestConstants";

function getBookingOnUserIdRequestSuccess(booking){

    return ({
        type:getBookingOnUserIdRequestConstants.success,
        booking : booking,
        error : ''
    });
}

function getBookingOnUserIdRequestFail(error){

    return ({
        type:getBookingOnUserIdRequestConstants.fail,
        booking: undefined,
        error : console.error
    });
}

function getBookingOnUserIdRequestAction (userId){
    return ()=> {
        const promise = findByUserId(userId);
        promise.then((response)=>{
            
            const booking = response.data;
            const actionObj = getBookingOnUserIdRequestSuccess(booking);
            store.dispatch(actionObj);
        }).catch(error =>
            {
                const actionObj = getBookingOnUserIdRequestFail(error.message);
                store.dispatch(actionObj);
            }) 
    }
}

export {getBookingOnUserIdRequestSuccess , getBookingOnUserIdRequestFail , getBookingOnUserIdRequestAction};