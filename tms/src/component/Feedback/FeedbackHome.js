import {Link} from "react-router-dom";
import commonStyle from "./commonStyle.module.css"
export default function FeedbackHome(){

    
    return (

        <div className="container mt-5">
      <h1> Feedback Module </h1>

      <div className={commonStyle.content}>
        <div>
          <br /> The features available are : 
          <ul className="list-group mt-4">
            <li className="list-group-item">
              <Link to="/addfeedback">Add Feedback</Link>
            </li>
            <li className="list-group-item">
              <Link to="/getfeedbackonrequest">Get Feedback Details On Request </Link>
            </li>
            <li className="list-group-item">
              <Link to="/getfeedbackbycustomer">Get Feedback Details By Customer Id </Link>
            </li>

          </ul>
        </div>
      </div>
    </div>
    );


}