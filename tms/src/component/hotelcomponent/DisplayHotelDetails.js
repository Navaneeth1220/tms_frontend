
export default function DisplayHotelDetails({ hotel }) {

    let { hotelId, hotelName, hotelType, hotelDescription, address, rent } = hotel;

    return (

        <div>
            Hotel Id is {hotelId}
            <br />
            Hotel Name is {hotelName}
            <br />
            Hotel Type is {hotelType}
            <br />
            Hotel Description is {hotelDescription}
            <br />
            Hotel Address is {address}
            <br />
            Hotel Rent is {rent}
            <br />
        </div>
    );
}