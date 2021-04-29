import {Link} from "react-router-dom";
import style from '../Route/style.css';
export default function BusHome(){

    
    return (

        <div className="container mt-5">
      <h1> Bus Module </h1>

      <div className={style.content}>
        <div>
          <br /> The features available are : 
          <ul className="list-group mt-4">
            <li className="list-group-item">
              <Link to="/addbus">Add Bus</Link>
            </li>
            <li className="list-group-item">
              <Link to="/allbuses">All Buses</Link>
            </li>
            <li className="list-group-item">
              <Link to="/busdetailsonrequest">Find Your Bus</Link>
            </li>

          </ul>
        </div>
      </div>
    </div>
    )


}