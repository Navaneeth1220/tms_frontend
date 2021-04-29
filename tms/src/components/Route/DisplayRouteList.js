import { Link } from 'react-router-dom';

export default function DisplayRouteList({ routes }) {

    console.log("inside Display Route List", routes);

    return (

        <div>

            <ul>

                {
                    routes.map((route) => <li key={route.routeId}>

                        <Link to={`/routedetails/${route.routeId}`} >
                            <span>{route.routeId} {route.routeFrom} </span>

                        </Link>

                    </li>)
                }
            </ul>


        </div>

    )

}
