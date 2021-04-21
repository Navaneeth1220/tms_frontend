
import axios from "axios";

const baseUrl = "http://localhost:8181";

function fetchHotelById(hotelId) {

    const url = baseUrl + "/hotels/byid/" + hotelId;
    const promise = axios.get(url);
    return promise;

}

function addHotel(data) {

    const url = baseUrl + "/hotels/add";
    let requestData = {

        hotelName: data.hotelName,
        hotelDescription: data.hotelDescription,
        hotelType: data.hotelType,
        address: data.address,
        rent: data.rent
    };

    console.log("inside addHotel service, request data", requestData);
    const promise = axios.post(url, requestData);
    return promise;

}

function fetchAllHotels() {

    const url = baseUrl + "/hotels";
    const promise = axios.get(url);
    return promise;

}

export { fetchHotelById, addHotel, fetchAllHotels };
