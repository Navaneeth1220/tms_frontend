
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import addHotelReducer from "./addhotel/addHotelReducer";
import fetchHotelByIdReducer from "./fetchhotelbyid/fetchHotelByIdReducer";
import fetchAllHotelsReducer from "./fetchallhotels/fetchAllHotelsReducer";
import getHotelOnRequestReducer from "./gethotelonrequest/getHotelOnRequestReducer";

const hotelStore = createStore(

    combineReducers({

        addHotel: addHotelReducer,
        fetchHotelById: fetchHotelByIdReducer,
        fetchAllHotels: fetchAllHotelsReducer,
        getHotelOnRequest: getHotelOnRequestReducer,

    }),

    composeWithDevTools(applyMiddleware(thunk))
);

export default hotelStore;