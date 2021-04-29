import { useEffect } from "react";
import DisplayRouteList from "./DisplayRouteList";
import { useDispatch, useSelector } from "react-redux";
import { allRoutesAction } from '../../redux/routeredux/allRoutes/allRoutesActions';
import style from "./style.css";
export default function GetAllRoutes() {


    const currentState = useSelector(state => {

        return {

            routes: state.allRoutes.routes,
            error: state.allRoutes.error,

        };
    })

    const dispatch = useDispatch();

    const fetchAll = () => {

        console.log("inside use state function")
        dispatch(allRoutesAction());
    };

    useEffect(fetchAll, []);

    console.log("inside get all routes", currentState.routes);

    return (
        <div className={style}>

            <h1>Get All Routes</h1>

            <div>
                <ul >

                    {currentState.routes ? (

                        <DisplayRouteList routes={currentState.routes} />

                    ) : ''}



                </ul>

            </div>
            { currentState.error ? (

                <div className={style.error}>
                    Get All Routes Error in request processing
                    <br />
                    {currentState.error}
                </div>
            ) : ''}


        </div>

    )

}