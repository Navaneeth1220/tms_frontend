
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


export default function PackageNavbar() {

    return (
        <div>


            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" className="navbar-brand" >
                    Package Module
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link" >
                                <span>PackageHome </span>
                                <span className="sr-only">(current)</span>

                            </Link>


                        </li>

                        <li className="nav-item">

                            <Link to="/addpackage" className="nav-link" >
                                <span>Add Package</span>

                            </Link>
                        </li>




                        <li className="nav-item">

                            <Link to="/all" className="nav-link" >
                                <span>Get All Packages</span>
                            </Link>
                        </li>*

                        <li className="nav-item">

                            <Link to="/packagedetailsonrequest" className="nav-link" >
                                <span>Get Package Details</span>
                            </Link>
                        </li>

                    </ul>

                </div>
            </nav>






        </div>

    )

}