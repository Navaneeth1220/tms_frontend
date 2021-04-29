import {fetchBusByRoute} from '../../../service/RouteService';
import store from '../../bookingredux/store';
import fetchBusByRouteConstants from './fetchBusByRouteConstants';

function fetchBusByRouteSuccess(bus){

    return ({
        type:fetchBusByRouteConstants.success,
        bus : bus,
        error : ''
    });
}

function fetchBusByRouteFail(error){

    return ({
        type:fetchBusByRouteConstants.fail,
        bus: undefined,
        error : console.error
    });
}

function fetchBusByRouteAction (routeId){
    return ()=> {
        const promise = fetchBusByRoute(routeId);
        promise.then((response)=>{
            
            const bus = response.data;
            const actionObj = fetchBusByRouteSuccess(bus);
            store.dispatch(actionObj);
        }).catch(error =>
            {
                const actionObj = fetchBusByRouteFail(error.message);
                store.dispatch(actionObj);
            }) 
    }
}

export {fetchBusByRouteSuccess , fetchBusByRouteFail , fetchBusByRouteAction};