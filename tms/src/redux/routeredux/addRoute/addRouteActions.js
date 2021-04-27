import { addRoute } from "../../../service/RouteService";
import store from "../../store";
import addRouteConstants from "./addRouteConstants";

function addRouteSuccess(route) {

    return ({

        route: route,
        error: '',
        type: addRouteConstants.success
    });

}

function addRouteFail(error) {

    return (

        {
            route: undefined,
            error: error,
            type: addRouteConstants.fail
        });
}

function addRouteAction(data) {

    return () => {

        const promise = addRoute(data);

        promise.then(

            response => {

                const route = response.data;
                let actionObj = addRouteSuccess(route);
                store.dispatch(actionObj);
            }

        ).catch(error => {

            let actionObj = addRouteFail(error.message);
            store.dispatch(actionObj);
        })

    }


}

export { addRouteAction, addRouteSuccess, addRouteFail };