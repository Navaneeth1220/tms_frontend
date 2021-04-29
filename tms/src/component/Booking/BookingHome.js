import style from "./style.css"
import {Link} from "react-router-dom";

export default function BookingHome(){

    
    return (

        <div className="container mt-5">
      <h1> Booking Module </h1>

      <div className={style.content}>
        <div>
          <br /> Thefeatures availble are : 
          <ul className="list-group mt-4">
            <li className="list-group-item">
              <Link to="/addbooking">Add Booking</Link>
            </li>
            <li className="list-group-item">
              <Link to="/bookingdetails">View Booking</Link>
            </li>
            <li className="list-group-item">
              <Link to="/useridbooking">Booking History</Link>
            </li>

          </ul>
        </div>
      </div>
    </div>
    );


}