import { allBuses } from "../../../service/BusService";
import store from "../../routeredux/store";
import allBusesConstants from './allBusesConstants'


function allBusesRequest() {
    return (
        {
            progress: true,
            buses: [],
            error: '',
            type: allBusesConstants.allBusesRequest
        }
    );

}

function allBusesSuccess(buses) {

    return (
        {
            progress: false,
            buses: buses,
            error: '',
            type: allBusesConstants.allBusesSuccess
        });
}


function allBusesFail(error) {

    return (
        {
            progress: false,
            buses: [],
            error: error,
            type: allBusesConstants.allBusesFail
        });


}

function allBusesAction() {

    return () => {

        store.dispatch(allBusesRequest());
        const promise = allBuses();
        
        promise.then((response) => {

            const buses = response.data;
            store.dispatch(allBusesSuccess(buses));

        }).catch(error => {

            store.dispatch(allBusesFail(error.message));
        })

    }

}

export { allBusesAction, allBusesFail, allBusesSuccess, allBusesRequest };