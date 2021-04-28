

import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import addReportReducer from "./addReport/addReportReducer";



const store = createStore(

    combineReducers({

        addReport: addReportReducer


    }),

    composeWithDevTools(applyMiddleware(thunk))
);

export default store;





















