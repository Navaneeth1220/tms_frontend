import React, { useState } from 'react'
import DisplayRouteDetails from './DisplayRouteDetails';
import style from "./style.css";
import { useDispatch, useSelector } from 'react-redux';
import { getRouteOnRequestAction } from '../../redux/routeredux/getrouteonrequest/getRouteOnRequestActions';

export default function GetRouteDetailsOnRequest() {

    const routeIdRef = React.createRef();

    const intitalState = { routeId: undefined };

    const [currentState, setNewState] = useState(intitalState);

    const response = useSelector(state => {

        return ({

            route: state.getRouteOnRequest.route,
            error: state.getRouteOnRequest.error
        });
    })

    const dispatch = useDispatch();



    const submitHandler = (event) => {

        event.preventDefault();
        console.log("current state", currentState);
        const routeId = routeIdRef.current.value;
        dispatch(getRouteOnRequestAction(routeId));

    }

    const setFieldState = () => {

        const routeIdValue = routeIdRef.current.value;
        const newState = { ...currentState, routeId: routeIdValue, route: undefined, errMsg: undefined };
        setNewState(newState);
    }

    return (
        <div>
            <h1> Get Route Details On Request</h1>

            <div className={style.content}>
                <form onSubmit={submitHandler} className={style.content}>

                    <div className="form-group">
                        <label>Enter RouteId</label>

                        <input
                            name="routeId"
                            type="text"
                            ref={routeIdRef}
                            onChange={setFieldState}
                            className="form-control" />

                    </div>

                    <button className="btn btn-primary">Get Route</button>

                </form>

                {response.route ? (
                    <div>
                        <DisplayRouteDetails route={response.route} />
                    </div>
                ) : ''}


                {
                    response.error ? (

                        <div className={style.error}>
                            Get Route On Request Processing Unsuccessful
                            <br />
                            {response.error}

                        </div>
                    ) : ''

                }
            </div>
        </div>

    );

}
