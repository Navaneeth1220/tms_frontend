import DisplayHotelDetails from "./DisplayHotelDetails";


export default function DisplayHotelList({ hotels }) {

    return (

        <div>
            <ul>
                {hotels.map((hotel) => <li key={hotel.hotelId}><DisplayHotelDetails hotel={hotel} /></li>)}
            </ul>
        </div>
    );



}