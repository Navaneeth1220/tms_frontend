
import { fetchHotelById } from "../../../service/HotelService";
import hotelStore from "../store";
import getHotelOnRequestConstants from "./getHotelOnRequestConstants";

function getHotelOnRequestSuccess(hotel) {

    return ({

        type: getHotelOnRequestConstants.success,
        hotel: hotel,
        error: ''
    });

}


function getHotelOnRequestFail(error) {

    return ({

        type: getHotelOnRequestConstants.fail,
        hotel: undefined,
        error: error
    });

}

function getHotelOnRequestAction(hotelId) {

    return () => {

        const promise = fetchHotelById(hotelId);
        promise.then((response) => {

            const hotel = response.data;
            const actionObj = getHotelOnRequestSuccess(hotel);
            hotelStore.dispatch(actionObj);

        }).catch(error => {

            const actionObj = getHotelOnRequestFail(error.message);
            hotelStore.dispatch(actionObj);
        })
    }

}


export { getHotelOnRequestAction, getHotelOnRequestFail, getHotelOnRequestSuccess };