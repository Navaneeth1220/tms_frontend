
import commonStyle from "./commonStyle.module.css";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


export default function HotelHome() {

  return (

    <div className="container mt-5">
      <h1> Hotel Module </h1>

      <div className={commonStyle.content}>
        <div>
          <br /> The features available are :
        <ul className="list-group mt-4">

            <li className="nav-item">

              <Link to="/addhotel" className="nav-link" >
                <span>Add Hotel</span>

              </Link>
            </li>

            <li className="nav-item">

              <Link to="/allhotels" className="nav-link" >
                <span>Get All Hotels</span>
              </Link>
            </li>

            <li className="nav-item">

              <Link to="/hoteldetailsonrequest" className="nav-link" >
                <span>Get Hotel Details </span>
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
}
