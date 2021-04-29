import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
export default function RouteHome(){

    
    return (

        <div>
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">
                Route Module
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link" >
                                <span>Route Home </span>
                                <span className="sr-only">(current)</span>

                            </Link>


                        </li>

                        <li className="nav-item">

                            <Link to="/addRoute" className="nav-link" >
                                <span>Create Route</span>

                            </Link>
                        </li>
                        
                        <li className="nav-item">

                            <Link to="/allroutes" className="nav-link" >
                                <span>Get All Routes</span>
                            </Link>
                          </li>

                        <li className="nav-item">

                            <Link to="/routedetailsonrequest" className="nav-link">
                            <span>Route Details On Request</span>
                            </Link>
                        </li>

                        <li className="nav-item">

                            <Link to="/fetchbusbyroute" className="nav-link">
                            <span>Bus Details For This Route On Request</span>
                            </Link>
                        </li>
                        
                        <li className="nav-item">

                            <Link to="/updateroute" className="nav-link">
                            <span>Update Route</span>
                            </Link>
                        </li>

                    </ul>
                
            </div>
        </nav> 



        
    </div>
    )


}