
import { fetchHotelById } from "../../../service/HotelService";
import store from "../../bookingredux/store";
import fetchHotelByIdConstants from "./fetchHotelByIdConstants";

function fetchHotelByIdRequest() {

    return ({

        progress: true,
        hotel: undefined,
        error: '',
        type: fetchHotelByIdConstants.fetchByIdRequest
    });

}

function fetchHotelByIdSuccess(hotel) {

    return ({

        progress: false,
        hotel: hotel,
        error: '',
        type: fetchHotelByIdConstants.fetchByIdSuccess
    });

}


function fetchHotelByIdFail(error) {

    return ({

        progress: false,
        hotel: undefined,
        error: error,
        type: fetchHotelByIdConstants.fetchByIdFail
    });

}

function fetchHotelByIdAction(hotelId) {

    return () => {

        store.dispatch(fetchHotelByIdRequest());
        const promise = fetchHotelById(hotelId);
        
        promise.then(response => {

            const hotel = response.data;
            store.dispatch(fetchHotelByIdSuccess(hotel));
        })
            .catch(error => {

                store.dispatch(fetchHotelByIdFail(error.message));
            })

    }

}

export { fetchHotelByIdAction, fetchHotelByIdFail, fetchHotelByIdSuccess, fetchHotelByIdRequest };