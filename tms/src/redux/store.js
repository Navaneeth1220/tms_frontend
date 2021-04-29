import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import addBusReducer from './busredux/addBus/addBusReducers';
import fetchBusReducer from './busredux/fetchBus/fetchBusReducers';
import allBusesReducer from './busredux/allBuses/allBusesReducers';
import addRouteReducer from './routeredux/addRoute/addRouteReducers';
import allRoutesReducer from './routeredux/allRoutes/allRoutesReducers';
import fetchRouteReducer from './routeredux/fetchRoute/fetchRouteReducers';
import getBusOnRequestReducer from './busredux/getbusonrequest/getBusOnRequestReducers';
import getRouteOnRequestReducer from './routeredux/getrouteonrequest/getRouteOnRequestReducers';
import fetchBusByRouteReducer from './routeredux/fetchbusbyroute/fetchBusByRouteReducers';
import updateRouteReducer from './routeredux/updateRoute/updateRouteReducers';

const store = createStore(

    combineReducers({

        addBus: addBusReducer,
        fetchBus: fetchBusReducer,
        allBuses: allBusesReducer,
        getBusOnRequest: getBusOnRequestReducer,
        addRoute: addRouteReducer,
        allRoutes: allRoutesReducer,
        fetchRoute: fetchRouteReducer,
        getRouteOnRequest: getRouteOnRequestReducer,
        fetchBusByRoute: fetchBusByRouteReducer,
        updateRoute: updateRouteReducer, 
    }),

    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
