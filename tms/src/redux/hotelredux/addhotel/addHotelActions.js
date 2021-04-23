
import { addHotel } from "../../../service/HotelService";
import hotelStore from "../store";
import addHotelConstants from "./addHotelConstants";

function addHotelSuccess(hotel) {

    return ({

        hotel: hotel,
        error: '',
        type: addHotelConstants.success
    });

}

function addHotelFail(error) {

    return (

        {
            hotel: undefined,
            error: error,
            type: addHotelConstants.fail
        });
}

function addHotelAction(data) {

    return () => {

        const promise = addHotel(data);

        promise.then(

            response => {

                const hotel = response.data;
                let actionObj = addHotelSuccess(hotel);
                hotelStore.dispatch(actionObj);
            }

        ).catch(error => {

            let actionObj = addHotelFail(error.message);
            hotelStore.dispatch(actionObj);
        })

    }


}

export { addHotelAction, addHotelSuccess, addHotelFail };