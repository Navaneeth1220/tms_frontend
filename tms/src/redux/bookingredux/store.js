import { applyMiddleware , combineReducers , createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import addBookingReducer from "./addBooking/addBookingReducer"
import getBookingOnRequestReducer from "./getbookingonrequest/getBookingOnRequestReducer";
import getBookingOnUserIdRequestReducer from "./getBookingOnUserIdRequest/getBookingOnUserIdRequestReducer";
import addHotelReducer from "../hotelredux/addhotel/addHotelReducer";
import fetchHotelByIdReducer from "../hotelredux/fetchhotelbyid/fetchHotelByIdReducer";
import fetchAllHotelsReducer from "../hotelredux/fetchallhotels/fetchAllHotelsReducer";
import getHotelOnRequestReducer from "../hotelredux/gethotelonrequest/getHotelOnRequestReducer";
import addPackageReducer from "../packageredux/addpackage/addPackageReducer";
import fetchPackageByIdReducer from "../packageredux/fetchpackagebyid/fetchPackageByIdReducer";
import fetchAllPackagesReducer from "../packageredux/fetchallpackages/fetchAllPackagesReducer";
import getPackageOnRequestReducer from "../packageredux/getpackageonrequest/getPackageOnRequestReducer";
import updatePackageReducer from "../packageredux/updatepackage/updatePackageReducer";

const store = createStore (

    combineReducers({

        addBooking : addBookingReducer,
        getBookingOnRequest : getBookingOnRequestReducer,
        getBookingOnUserIdRequest : getBookingOnUserIdRequestReducer,
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