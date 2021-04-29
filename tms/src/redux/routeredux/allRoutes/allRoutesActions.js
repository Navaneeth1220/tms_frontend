import { allRoutes } from "../../../service/RouteService";
import store from "../store";
import allRoutesConstants from './allRoutesConstants'


function allRoutesRequest() {
    return (
        {
            progress: true,
            routes: [],
            error: '',
            type: allRoutesConstants.allRoutesRequest
        }
    );

}

function allRoutesSuccess(routes) {

    return (
        {
            progress: false,
            routes: routes,
            error: '',
            type: allRoutesConstants.allRoutesSuccess
        });
}


function allRoutesFail(error) {

    return (
        {
            progress: false,
            routes: [],
            error: error,
            type: allRoutesConstants.allRoutesFail
        });


}

function allRoutesAction() {

    return () => {

        store.dispatch(allRoutesRequest());
        const promise = allRoutes();
        
        promise.then((response) => {

            const routes = response.data;
            store.dispatch(allRoutesSuccess(routes));

        }).catch(error => {

            store.dispatch(allRoutesFail(error.message));
        })

    }

}

export { allRoutesAction, allRoutesFail, allRoutesSuccess, allRoutesRequest };