
import { Link } from 'react-router-dom';

export default function DisplayHotelList({ hotels }) {

    console.log("inside Display Hotel List", hotels);

    return (

        <div>

            <ol>

                {
                    hotels.map((hotel) => <li key={hotel.hotelId}>

                        <Link to={`/hoteldetails/${hotel.hotelId}`} >
                            <span>{hotel.hotelId} {hotel.hotelName} </span>

                        </Link>

                    </li>)
                }
            </ol>


        </div>

    )

}