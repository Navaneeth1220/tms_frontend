import React, {useEffect } from "react";
import DisplayBusDetails from "./DisplayBusDetails";
import { useDispatch, useSelector } from 'react-redux';
import { fetchBusAction } from '../../redux/busredux/fetchBus/fetchBusActions';
import style from "./style.css";




export default function GetBusDetailsById({busId}) {

    const currentState = useSelector(state => {

        return ({

            bus: state.fetchBus.bus,
            error: state.fetchBus.error
        });
    })

    const dispatch = useDispatch();


    const fetchBusOnRender = () => {

        dispatch(fetchBusAction(busId));

    }

    useEffect(fetchBusOnRender, []);



    return (

        <div className={style.content}>
            <h1> Get Bus Details</h1>



            {currentState.bus ? (
                <div>
                    <DisplayBusDetails bus={currentState.bus} />
                </div>
            ) : ''}


            {
                currentState.error ? (

                    <div className={style.error}>
                        Get Bus Details Request processing unsuccessful
                        <br />
                        {currentState.error}

                    </div>
                ) : ''

            }
        </div>

    );
}