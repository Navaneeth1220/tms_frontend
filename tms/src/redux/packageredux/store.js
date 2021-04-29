

import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import addHotelReducer from "../hotelredux/addhotel/addHotelReducer";
import fetchHotelByIdReducer from "../hotelredux/fetchhotelbyid/fetchHotelByIdReducer";
import fetchAllHotelsReducer from "../hotelredux/fetchallhotels/fetchAllHotelsReducer";
import getHotelOnRequestReducer from "../hotelredux/gethotelonrequest/getHotelOnRequestReducer";
import addPackageReducer from "./addpackage/addPackageReducer";
import fetchPackageByIdReducer from "./fetchpackagebyid/fetchPackageByIdReducer";
import fetchAllPackagesReducer from "./fetchallpackages/fetchAllPackagesReducer";
import getPackageOnRequestReducer from "./getpackageonrequest/getPackageOnRequestReducer";
import updatePackageReducer from "./updatepackage/updatePackageReducer";


const store = createStore(

    combineReducers({

        addHotel: addHotelReducer,
        fetchHotelById: fetchHotelByIdReducer,
        fetchAllHotels: fetchAllHotelsReducer,
        getHotelOnRequest: getHotelOnRequestReducer,
        addPackage: addPackageReducer,
        fetchAllPackages: fetchAllPackagesReducer,
        fetchPackageById: fetchPackageByIdReducer,
        getPackageOnRequest: getPackageOnRequestReducer,
        updatePackage: updatePackageReducer,

    }),

    composeWithDevTools(applyMiddleware(thunk))
);

export default store;





















