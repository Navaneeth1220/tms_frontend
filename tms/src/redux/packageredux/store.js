
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import addPackageReducer from "./addpackage/addPackageReducer";
import fetchAllPackagesReducer from "./fetchallpackages/fetchAllPackagesReducer";
import fetchPackageByIdReducer from "./fetchpackagebyid/fetchPackageByIdReducer";
import getPackageOnRequestReducer from "./getpackageonrequest/getPackageOnRequestReducer";

const store = createStore(

    combineReducers({

        addPackage: addPackageReducer,
        fetchAllPackages: fetchAllPackagesReducer,
        fetchPackageById: fetchPackageByIdReducer,
        getPackageOnRequest: getPackageOnRequestReducer,
        

    }),

    composeWithDevTools(applyMiddleware(thunk))
);

export default store;