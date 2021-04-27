import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

export default function BusNavBar(){

    return(
    <div>
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">
                Bus Module
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link" >
                                <span>Bus Home </span>
                                <span className="sr-only">(current)</span>

                            </Link>


                        </li>

                        <li className="nav-item">

                            <Link to="/addBus" className="nav-link" >
                                <span>Add Bus</span>

                            </Link>
                        </li>
                          
                          <li className="nav-item">

                            <Link to="/allbuses" className="nav-link" >
                                <span>Get All Buses</span>
                            </Link>
                          </li>
                           
                        <li className="nav-item">

                            <Link to="/busdetailsonrequest" className="nav-link">
                            <span>Bus Details on Request</span>
                            </Link>
                        </li>


                    </ul>
                
            </div>
        </nav> 



        
    </div>
    )
}
