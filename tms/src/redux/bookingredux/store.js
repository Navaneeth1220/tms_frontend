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
import addCustomerReducer from "../customer/addCustomer/addCustomerReducer";
import fetchCustomerByIdReducer from "../customer/fetchCustomerById/fetchCustomerByIdReducer";
import updateCustomerReducer from "../customer/updateCustomer/updateCustomerReducer";
import addReportReducer from "../addReport/addReportReducer";
import getReportOnRequestReducer from "../getReportOnRequest/getReportOnRequestReducer";
import addFeedbackReducer from '../feedbackredux/addfeedback/addFeedbackReducer';
import addBusReducer from '../busredux/addBus/addBusReducers';
import fetchBusReducer from '../busredux/fetchBus/fetchBusReducers';
import allBusesReducer from '../busredux/allBuses/allBusesReducers';
import addRouteReducer from '../routeredux/addRoute/addRouteReducers';
import allRoutesReducer from '../routeredux/allRoutes/allRoutesReducers';
import fetchRouteReducer from '../routeredux/fetchRoute/fetchRouteReducers';
import getBusOnRequestReducer from '../busredux/getbusonrequest/getBusOnRequestReducers';
import getRouteOnRequestReducer from '../routeredux/getrouteonrequest/getRouteOnRequestReducers';
import fetchBusByRouteReducer from '../routeredux/fetchbusbyroute/fetchBusByRouteReducers';
import updateRouteReducer from '../routeredux/updateRoute/updateRouteReducers';


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
        fetchCustomerById: fetchCustomerByIdReducer,
        addCustomer: addCustomerReducer,
        updateCustomer:updateCustomerReducer,
        addReport: addReportReducer,
        getReportOnRequest: getReportOnRequestReducer,
        addFeedback: addFeedbackReducer,
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