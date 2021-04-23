
import { fetchAllHotels } from "../../../service/HotelService";
import hotelStore from "../store";
import fetchAllHotelsContants from "./fetchAllHotelsConstants";


function fetchAllHotelsRequest() {
    return (
        {
            progress: true,
            hotels: [],
            error: '',
            type: fetchAllHotelsContants.fetchAllHotelsRequest
        }
    );

}

function fetchAllHotelsSuccess(hotels) {

    return (
        {
            progress: false,
            hotels: hotels,
            error: '',
            type: fetchAllHotelsContants.fetchAllHotelsSuccess
        });
}


function fetchAllHotelsFail(error) {

    return (
        {
            progress: false,
            hotels: [],
            error: error,
            type: fetchAllHotelsContants.fetchAllHotelsFail
        });


}

function fetchAllHotelsAction() {

    return () => {

        hotelStore.dispatch(fetchAllHotelsRequest());
        const promise = fetchAllHotels();
        
        promise.then((response) => {

            const hotels = response.data;
            hotelStore.dispatch(fetchAllHotelsSuccess(hotels));

        }).catch(error => {

            hotelStore.dispatch(fetchAllHotelsFail(error.message));
        })

    }

}

export { fetchAllHotelsAction, fetchAllHotelsFail, fetchAllHotelsSuccess, fetchAllHotelsRequest };