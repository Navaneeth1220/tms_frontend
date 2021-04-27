import { Link } from 'react-router-dom';

export default function DisplayBusList({ buses }) {

    console.log("inside Display Bus List", buses);

    return (

        <div>

            <ul>

                {
                    buses.map((bus) => <li key={bus.busId}>

                        <Link to={`/busdetails/${bus.busId}`} >
                            <span>{bus.busId} {bus.busType} </span>

                        </Link>

                    </li>)
                }
            </ul>


        </div>

    )

}
