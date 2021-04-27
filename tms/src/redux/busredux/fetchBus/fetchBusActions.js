import { fetchBus } from "../../../service/BusService";
import store from "../../store";
import fetchBusConstants from "./fetchBusConstants";

function fetchBusRequest() {

    return ({

        progress: true,
        bus: undefined,
        error: '',
        type: fetchBusConstants.fetchRequest
    });

}

function fetchBusSuccess(bus) {

    return ({

        progress: false,
        bus: bus,
        error: '',
        type: fetchBusConstants.fetchSuccess
    });

}


function fetchBusFail(error) {

    return ({

        progress: false,
        bus: undefined,
        error: error,
        type: fetchBusConstants.fetchFail
    });

}

function fetchBusAction(busId) {

    return () => {

        store.dispatch(fetchBusRequest());
        const promise = fetchBus(busId);
        
        promise.then(response => {

            const bus = response.data;
            store.dispatch(fetchBusSuccess(bus));
        })
            .catch(error => {

                store.dispatch(fetchBusFail(error.message));
            })

    }

}

export { fetchBusAction, fetchBusFail, fetchBusSuccess, fetchBusRequest };