import { fetchBus } from "../../../service/BusService";
import store from "../../store";
import getBusOnRequestConstants from "./getBusOnRequestConstants";

function getBusOnRequestSuccess(bus) {

    return ({

        type: getBusOnRequestConstants.success,
        bus: bus,
        error: ''
    });

}


function getBusOnRequestFail(error) {

    return ({

        type: getBusOnRequestConstants.fail,
        bus: undefined,
        error: error
    });

}

function getBusOnRequestAction(busId) {

    return () => {

        const promise = fetchBus(busId);
        promise.then((response) => {

            const bus = response.data;
            const actionObj = getBusOnRequestSuccess(bus);
            store.dispatch(actionObj);

        }).catch(error => {

            const actionObj = getBusOnRequestFail(error.message);
            store.dispatch(actionObj);
        })
    }

}


export { getBusOnRequestAction, getBusOnRequestFail, getBusOnRequestSuccess };