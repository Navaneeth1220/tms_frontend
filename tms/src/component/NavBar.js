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
                            <Link to="/bookinghome" className="nav-link" >
                                <span>Booking </span>
                                <span className="sr-only">(current)</span>

                            </Link>

                        </li>
                        <li className="nav-item active">
                        <Link to="/hotelhome" className="nav-link" >
                                <span>Hotel </span>
                                <span className="sr-only">(current)</span>

                            </Link>
                        </li>
                        <li className="nav-item active">
                        <Link to="/feedbackhome" className="nav-link" >
                                <span>Feedback </span>
                                <span className="sr-only">(current)</span>
                        </Link>
                        </li>
                        <li className="nav-item active">
                        <Link to="/reporthome" className="nav-link" >
                                <span>Report </span>
                                <span className="sr-only">(current)</span>
                        </Link>
                        </li>

                    </ul>
                
            </div>
        </nav> 



        
    </div>
    )
}