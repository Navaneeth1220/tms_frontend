import React, {useEffect } from "react";
import DisplayRouteDetails from "./DisplayRouteDetails";
import { useDispatch, useSelector } from 'react-redux';
import { fetchRouteAction } from '../../redux/routeredux/fetchRoute/fetchRouteActions';
import style from "./style.css";




export default function GetRouteDetailsById({routeId}) {

    const currentState = useSelector(state => {

        return ({

            route: state.fetchRoute.route,
            error: state.fetchRoute.error
        });
    })

    const dispatch = useDispatch();


    const fetchRouteOnRender = () => {

        dispatch(fetchRouteAction(routeId));

    }

    useEffect(fetchRouteOnRender, []);



    return (

        <div className={style}>
            <h1> Get Route Details</h1>



            {currentState.route ? (
                <div>
                    <DisplayRouteDetails route={currentState.route} />
                </div>
            ) : ''}


            {
                currentState.error ? (

                    <div className= {style.error}>
                        Get Route Details Request processing unsuccessful
                        <br />
                        {currentState.error}

                    </div>
                ) : ''

            }
        </div>

    );
}