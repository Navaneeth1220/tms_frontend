import {findById} from "../../../service/Booking/BookingService";
import store from "../../store";
import findByIdConstants from "./findByIdConstants";

function findByIdRequest() {

    return (
        {
            progress : true,
            booking : undefined,
            error : '',
            type : findByIdConstants.findByIdRequest
        }
    );

}

function findByIdSuccess(booking){

    return (
        {
            progress : false,
            booking : booking,
            error : '',
            type : findByIdConstants.findByIdSuccess
        }
    );

}

function findByIdFail(error){

    return (
        {
            progress : false,
            booking : undefined,
            error : console.error,
            type : findByIdConstants.findByIdFail
        }
    );
}

function findByIdAction(bookingId){

    return ()=>{
        store.dispatch(findByIdRequest());
        const promise = findById(bookingId);

        promise.then(response=>{
            const booking = response.data;
            store.dispatch(findByIdSuccess(booking));
        })
            .catch(error => {
                 store.dispatch(findByIdFail(error.message));
            })
    }
}

export { findByIdAction , findByIdFail , findByIdRequest , findByIdSuccess};
