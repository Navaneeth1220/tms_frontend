import React, { useState } from 'react'
import DisplayBusDetails from './DisplayBusDetails';
import style from "./style.css";
import { useDispatch, useSelector } from 'react-redux';
import { getBusOnRequestAction } from '../../redux/busredux/getbusonrequest/getBusOnRequestActions';

export default function GetBusDetailsOnRequest() {

    const busIdRef = React.createRef();

    const intitalState = { busId: undefined };

    const [currentState, setNewState] = useState(intitalState);

    const response = useSelector(state => {

        return ({

            bus: state.getBusOnRequest.bus,
            error: state.getBusOnRequest.error
        });
    })

    const dispatch = useDispatch();



    const submitHandler = (event) => {

        event.preventDefault();
        console.log("current state", currentState);
        const busId = busIdRef.current.value;
        dispatch(getBusOnRequestAction(busId));

    }

    const setFieldState = () => {

        const busIdValue = busIdRef.current.value;
        const newState = { ...currentState, busId: busIdValue, bus: undefined, errMsg: undefined };
        setNewState(newState);
    }

    return (
        <div>
            <h1> Get Bus Details On Request</h1>

            <div className={style.content}>
                <form onSubmit={submitHandler} className={style.content}>

                    <div className="form-group">
                        <label>Enter BusId</label>

                        <input
                            name="busId"
                            type="number"
                            ref={busIdRef}
                            onChange={setFieldState}
                            className="form-control" />

                    </div>

                    <button className="btn btn-primary">Get Bus</button>

                </form>

                {response.bus ? (
                    <div>
                        <DisplayBusDetails bus={response.bus} />
                    </div>
                ) : ''}


                {
                    response.error ? (

                        <div className={style.error}>
                            Get Bus On Request Processing Unsuccessful
                            <br />
                            {response.error}

                        </div>
                    ) : ''

                }
            </div>
        </div>

    );

}
