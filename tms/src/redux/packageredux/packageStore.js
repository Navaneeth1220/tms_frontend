
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import addPackageReducer from "./addpackage/addPackageReducer";

const store = createStore(

    combineReducers({

        addPackage: addPackageReducer,
    }),

    composeWithDevTools(applyMiddleware(thunk))
);

export default store;