import axios from "axios"

const baseUrl="http://localhost:8181";

function findById(bookId){
    const url= baseUrl+ "/bookings/byid/"+bookId;
    const promise=axios.get(url);
    return promise;
}

function addBooking(data){

    const url=baseUrl+"/bookings/add";
    let requestData= {
        bookingTitle : data.bookingTitle,
        bookingType : data.bookingType,
        description : data.description,
        userId : data.userId,
        packageId : data.packageId,
        paymentMode : data.paymentMode,
        bankName : data.bankName,
        cardNo : data.cardNo,
        netAmount : data.netAmount,
        paymentStatus : data.paymentStatus,
        routeId : data.routeId 

    };


    console.log("inside addBooking service, request data", requestData);
    const promise = axios.post(url,requestData);
    return promise;

}

export {findById, addBooking}