import findByUserIdConstants from "./findByUserIdConstants";
import {findByUserId} from "../../../service/Booking/BookingService";
import store from '../../store';



function findByUserIdRequest(){

    return (
        {
            progress: "true",
            error: '',
            booking: undefined,
            type: findByUserIdConstants.findByUserIdRequest
        }
    );

 
}

function findByUserIdSuccess(booking){

    return (
        {
            progress : false,
            booking : booking,
            error : '',
            type : findByUserIdConstants.findByUserIdSuccess
        }
    );

}

function findByUserIdFail(error){

    return (
        {
            progress : false,
            booking : undefined,
            error : console.error,
            type : findByUserIdConstants.findByUserIdFail
        }
    );
}

function findByUserIdAction(userId){

    return ()=>{
        store.dispatch(findByUserIdRequest());
        const promise = findByUserId(userId);

        promise.then(response=>{
            const booking = response.data;
            store.dispatch(findByUserIdSuccess(booking));
        })
            .catch(error => {
                 store.dispatch(findByUserIdFail(error.message));
            })
    }
}

export {findByUserIdAction , findByUserIdRequest , findByUserIdSuccess,findByUserIdFail}