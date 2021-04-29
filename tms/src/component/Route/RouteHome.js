import { Link } from 'react-router-dom';
import style from '../Route/style.css';
export default function RouteHome(){

    
    return (

        <div className="container mt-5">
        <h1> Route Module </h1>
  
        <div className={style.content}>
          <div>
            <br /> The features available are : 
            <ul className="list-group mt-4">
              <li className="list-group-item">
                <Link to="/addRoute">Add Route</Link>
              </li>
              <li className="list-group-item">
                <Link to="/allroutes">All Routes</Link>
              </li>
              <li className="list-group-item">
                <Link to="/updateroute">Update Route</Link>
              </li>
              <li className="list-group-item">
                <Link to="/routedetailsonrequest">Find Your Route</Link>
              </li>
              <li className="list-group-item">
                <Link to="/fetchbusbyroute">Buses on a Route</Link>
              </li>
  
            </ul>
          </div>
        </div>
      </div>
    )


}