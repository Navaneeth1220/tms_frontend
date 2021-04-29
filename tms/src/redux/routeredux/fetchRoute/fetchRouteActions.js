import { fetchRoute } from "../../../service/RouteService";
import store from "../../bookingredux/store";
import fetchRouteConstants from "./fetchRouteConstants";

function fetchRouteRequest() {

    return ({

        progress: true,
        route: undefined,
        error: '',
        type: fetchRouteConstants.fetchRequest
    });

}

function fetchRouteSuccess(route) {

    return ({

        progress: false,
        route: route,
        error: '',
        type: fetchRouteConstants.fetchSuccess
    });

}


function fetchRouteFail(error) {

    return ({

        progress: false,
        route: undefined,
        error: error,
        type: fetchRouteConstants.fetchFail
    });

}

function fetchRouteAction(routeId) {

    return () => {

        store.dispatch(fetchRouteRequest());
        const promise = fetchRoute(routeId);
        
        promise.then(response => {

            const route = response.data;
            store.dispatch(fetchRouteSuccess(route));
        })
            .catch(error => {

                store.dispatch(fetchRouteFail(error.message));
            })

    }

}

export { fetchRouteAction, fetchRouteFail, fetchRouteSuccess, fetchRouteRequest };