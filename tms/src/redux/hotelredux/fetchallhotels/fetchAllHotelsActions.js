
import { fetchAllHotels } from "../../../service/HotelService";
import store from "../../store";
import fetchAllHotelsConstants from "./fetchAllHotelsConstants";


function fetchAllHotelsRequest() {
    return (
        {
            progress: true,
            hotels: [],
            error: '',
            type: fetchAllHotelsConstants.fetchAllHotelsRequest
        }
    );

}

function fetchAllHotelsSuccess(hotels) {

    return (
        {
            progress: false,
            hotels: hotels,
            error: '',
            type: fetchAllHotelsConstants.fetchAllHotelsSuccess
        });
}


function fetchAllHotelsFail(error) {

    return (
        {
            progress: false,
            hotels: [],
            error: error,
            type: fetchAllHotelsConstants.fetchAllHotelsFail
        });


}

function fetchAllHotelsAction() {

    return () => {

        store.dispatch(fetchAllHotelsRequest());
        const promise = fetchAllHotels();
        
        promise.then((response) => {

            const hotels = response.data;
            store.dispatch(fetchAllHotelsSuccess(hotels));

        }).catch(error => {

            store.dispatch(fetchAllHotelsFail(error.message));
        })

    }

}

export { fetchAllHotelsAction, fetchAllHotelsFail, fetchAllHotelsSuccess, fetchAllHotelsRequest };