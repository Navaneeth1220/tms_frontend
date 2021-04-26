import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

export default function BookingNavBar(){

    return(
    <div>
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">
                Booking Module
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link" >
                                <span>Booking Home </span>
                                <span className="sr-only">(current)</span>

                            </Link>


                        </li>

                        <li className="nav-item">

                            <Link to="/addbooking" className="nav-link" >
                                <span>Make Booking</span>

                            </Link>
                        </li>


                        <li className="nav-item">

                            <Link to="/bookingdetails" className="nav-link">
                            <span>Booking Details</span>
                            </Link>
                        </li>


                         <li className="nav-item">

                            <Link to="/useridbooking" className="nav-link">
                            <span>Booking History</span>
                            </Link>
                        </li>

                    </ul>
                
            </div>
        </nav> 



        
    </div>
    )
}