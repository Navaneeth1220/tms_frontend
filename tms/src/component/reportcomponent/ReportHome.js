
import {Link} from "react-router-dom";
import commonStyle from "./commonStyle.module.css"
export default function ReportHome(){

    
    return (

        <div className="container mt-5">
      <h1> Report Module </h1>

      <div className={commonStyle.content}>
        <div>
          <br /> The features available are : 
          <ul className="list-group mt-4">
            <li className="list-group-item">
              <Link to="/addreport">Add Report</Link>
            </li>
            <li className="list-group-item">
              <Link to="/getreportdetailsonrequest">Get Report Details On Request </Link>
            </li>

          </ul>
        </div>
      </div>
    </div>
    );


}