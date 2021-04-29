import { updateRoute } from '../../../service/RouteService';
import store from "../../bookingredux/store";
import updateRouteConstants from "./updateRouteConstants";

function updateRouteSuccess(route){

    return(
        {
            route:route,
            error:'',
            type:updateRouteConstants.success
        }
    );
}
function updateRouteFail(error){
    
    return(
        {
            route:undefined,
            error:error,
            type:updateRouteConstants.fail
        }
    );
}


function updateRouteAction(data){
    return () => {

        const promise = updateRoute(data);
        promise.then(

            response => {

                const route = response.data;
                let actionObj = updateRouteSuccess(route);
                store.dispatch(actionObj);
            }

        ).catch(error => {

            let actionObj = updateRouteFail(error.message);
            store.dispatch(actionObj);
        })

    }
}

export {updateRouteSuccess, updateRouteFail, updateRouteAction}