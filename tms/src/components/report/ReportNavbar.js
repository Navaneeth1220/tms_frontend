
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


export default function ReportNavbar() {

    return (
        <div>


            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" className="navbar-brand" >
                    Report Module
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/Reporthome" className="nav-link" >
                                <span>Report Home </span>
                                <span className="sr-only">(current)</span>

                            </Link>


                        </li>

                        <li className="nav-item">

                            <Link to="/addReport" className="nav-link" >
                                <span>Add Report</span>

                            </Link>
                        </li>




                        <li className="nav-item">

                            <Link to="/allreports" className="nav-link" >
                                <span>Get All Reports</span>
                            </Link>
                        </li>
                        <li className="nav-item">

                            <Link to="/reportdetailsonrequest" className="nav-link" >
                                <span>Get Report Details </span>
                            </Link>
                        </li>

                    </ul>

                </div>
            </nav>






        </div>

    )

}