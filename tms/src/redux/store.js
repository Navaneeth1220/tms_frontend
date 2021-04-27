import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import addBusReducer from './busredux/addBus/addBusReducers';
import fetchBusReducer from './busredux/fetchBus/fetchBusReducers';
import allBusesReducer from './busredux/allBuses/allBusesReducers';
import addRouteReducer from './routeredux/addRoute/addRouteReducers';
import allRoutesReducer from './routeredux/allRoutes/allRoutesReducers';
import fetchRouteReducer from './routeredux/fetchRoute/fetchRouteReducers';

const store = createStore(

    combineReducers({

        addBus: addBusReducer,
        fetchBus: fetchBusReducer,
        allBuses: allBusesReducer,
        addRoute: addRouteReducer,
        allRoutes: allRoutesReducer,
        fetchRoute: fetchRouteReducer,

    }),

    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
