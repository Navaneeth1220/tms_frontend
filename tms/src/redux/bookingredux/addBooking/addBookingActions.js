import {addBooking} from "../../../service/Booking/BookingService";
import store from "../../bookingredux/store";
import addBookingConstants from "./addBookingConstants"

function addBookingSuccess(booking){
    return (
        {
            booking : booking,
            error: '',
            type:addBookingConstants.success

        }
    );

}

function addBookingFail(error){
    return(
        {
            booking: undefined,
            error : error,
            type : addBookingConstants.fail
        }
    );
}

function addBookingAction (data){
    return ()=> {
        const promise = addBooking(data);

        promise.then(
            response => {
                const booking = response.data;
                let actionObj = addBookingSuccess(booking);
                store.dispatch(actionObj);
            }
        ).catch(error=>{

                    let actionObj = addBookingFail(error.message);
                    store.dispatch(actionObj);

                }
            )
    }
}

export {addBookingAction , addBookingSuccess , addBookingFail};