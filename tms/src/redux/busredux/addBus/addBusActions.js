import { addBus } from "../../../service/BusService";
import store from "../../store";
import addBusConstants from "./addBusConstants";

function addBusSuccess(bus) {

    return ({

        bus: bus,
        error: '',
        type: addBusConstants.success
    });

}

function addBusFail(error) {

    return (

        {
            bus: undefined,
            error: error,
            type: addBusConstants.fail
        });
}

function addBusAction(data) {

    return () => {

        const promise = addBus(data);

        promise.then(

            response => {

                const bus = response.data;
                let actionObj = addBusSuccess(bus);
                store.dispatch(actionObj);
            }

        ).catch(error => {

            let actionObj = addBusFail(error.message);
            store.dispatch(actionObj);
        })

    }


}

export { addBusAction, addBusSuccess, addBusFail };