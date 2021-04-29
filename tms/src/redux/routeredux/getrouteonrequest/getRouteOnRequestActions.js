import { fetchRoute } from "../../../service/RouteService";
import store from "../../bookingredux/store";
import getRouteOnRequestConstants from "./getRouteOnRequestConstants";

function getRouteOnRequestSuccess(route) {

    return ({

        type: getRouteOnRequestConstants.success,
        route: route,
        error: ''
    });

}


function getRouteOnRequestFail(error) {

    return ({

        type: getRouteOnRequestConstants.fail,
        route: undefined,
        error: error
    });

}

function getRouteOnRequestAction(routeId) {

    return () => {

        const promise = fetchRoute(routeId);
        promise.then((response) => {

            const route = response.data;
            const actionObj = getRouteOnRequestSuccess(route);
            store.dispatch(actionObj);

        }).catch(error => {

            const actionObj = getRouteOnRequestFail(error.message);
            store.dispatch(actionObj);
        })
    }

}


export { getRouteOnRequestAction, getRouteOnRequestFail, getRouteOnRequestSuccess };