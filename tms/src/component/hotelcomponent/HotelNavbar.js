
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


export default function HotelNavbar() {

    return (
        <div>


            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" className="navbar-brand" >
                    Hotel Module
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link" >
                                <span>HotelHome </span>
                                <span className="sr-only">(current)</span>

                            </Link>


                        </li>

                        <li className="nav-item">

                            <Link to="/addhotel" className="nav-link" >
                                <span>Add Hotel</span>

                            </Link>
                        </li>




                        <li className="nav-item">

                            <Link to="/all" className="nav-link" >
                                <span>Get All Hotels</span>
                            </Link>
                        </li>*

                        <li className="nav-item">

                            <Link to="/hoteldetailsonrequest" className="nav-link" >
                                <span>Get Hotel Details</span>
                            </Link>
                        </li>

                    </ul>

                </div>
            </nav>






        </div>

    )

}