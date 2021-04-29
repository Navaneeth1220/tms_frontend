
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import addReportReducer from "./addReportReducer";
import getReportOnRequestReducer from "../getReportOnRequest/getReportOnRequestReducer";

const store = createStore(

    combineReducers({

        addReport: addReportReducer,
        getReportOnRequest: getReportOnRequestReducer,



    }),

    composeWithDevTools(applyMiddleware(thunk))
);

export default store;


