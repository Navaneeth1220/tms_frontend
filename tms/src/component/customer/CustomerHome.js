import commonStyle from "./commonStyle.module.css"
import { Link } from "react-router-dom";

export default function CustomerHome() {


  return (

    <div className="container mt-5">
      <h1> Customer Module </h1>

      <div className={commonStyle.content}>
        <div>
          <br /> Thefeatures available are :
          <ul className="list-group mt-4">
            <li className="list-group-item">
              <Link to="/addcustomer">Add Customer</Link>
            </li>
            <li className="list-group-item">
              <Link to="/customerdetailsById">View Customer By Id</Link>
            </li>
            <li className="list-group-item">
              <Link to="/customerdetailsByPackageId">View Customer By Pacakge Id</Link>
            </li>
            <li className="list-group-item">
              <Link to="/customerdetailsByRouteId">View Customer By Route Id</Link>
            </li>
            <li className="list-group-item">
              <Link to="/updateCustomer">Update Customer</Link>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );


}