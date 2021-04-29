import React, { useState } from "react";
import DisplayRouteDetails from './DisplayRouteDetails';
import validationMessage from '../../validationMessage';
import style from "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { updateRouteAction } from "../../redux/routeredux/updateRoute/updateRouteActions";

export default function UpdateRoute() {

    const routeIdRef = React.createRef();
    const routeFromRef = React.createRef();
    const routeToRef = React.createRef();
    const pickupPointRef = React.createRef();
    const fareRef = React.createRef();
    

    const initialState = {

        routeId:undefined,    
        routeFrom: undefined,
        routeTo: undefined,
        pickupPoint: undefined,
        fare: undefined,
        validations: { routeFrom: undefined, routeTo: undefined },
    };

    const [currentState, setNewState] = useState(initialState);


    const response = useSelector(state => {
        return {

            route: state.updateRoute.route,
            error: state.updateRoute.error,
        };


    });

    const dispatch = useDispatch();

    const submitHandler = (event) => {

        event.preventDefault();
        //setNewState({ ...currentState, formStatus: "form submitted successfully" });
        if (currentState.validations.routeFrom || currentState.validations.routeTo ) {

            return;
        }
        let data = { ...currentState };
        console.log("form data that has to be sent to service", data);
        dispatch(updateRouteAction(data));

    };

    const setFieldState = (ref) => {

        const fieldName = ref.current.name;
        const fieldValue = ref.current.value;
        console.log("inside set field state field name = " + fieldName + " fieldValue= " + fieldValue);
        let validationMsg;
        if (ref === routeFromRef) {

            validationMsg = validateRouteFrom(fieldValue);
        }

        if (ref === routeToRef) {

            validationMsg = validateRouteTo(fieldValue);
        }

        const newValidations = { ...currentState.validations, [fieldName]: validationMsg };
        const newState = {

            ...currentState,
            [fieldName]: fieldValue,
            // route: undefined,
            //errMsg: undefined,
            validations: newValidations
        };

        setNewState(newState);

    };

    const validateRouteFrom = (routeFrom) => {

        if (routeFrom.length < 3) {

            return validationMessage.routeFromSmallThanLengthThree;
        }

        return undefined;
    }

    const validateRouteTo = (routeTo) => {

        if (routeTo.length < 3) {

            return validationMessage.routeToSmallThanLengthThree;
        }

        return undefined;
    }


    return (
        <div>
            <h1>Update Route </h1>
            <form onSubmit={submitHandler} className={style.content}>

                <div className="form-group">
                    <label>Enter Route Id</label>
                    <input
                        name="routeId"
                        type="text"
                        ref={routeIdRef}
                        onChange={() => setFieldState(routeIdRef)}
                        className="form-control"
                        required />
                </div>

                <div className="form-group">
                    <label>Enter Route From</label>
                    <input
                        name="routeFrom"
                        type="text"
                        ref={routeFromRef}
                        onChange={() => setFieldState(routeFromRef)}
                        className="form-control"
                        required />
                    {currentState.validations.routeFrom ? (
                        <div className={style.error}>
                            {currentState.validations.routeFrom}
                        </div>
                    ) : (
                        ""
                    )}

                </div>

                <div className="form-group">
                    <label>Enter Route To </label>
                    <input
                        name="routeTo"
                        type="text"
                        ref={routeToRef}
                        onChange={() => setFieldState(routeToRef)}
                        className="form-control"
                        required />

                    {currentState.validations.routeTo ? (
                        <div className={style.error}>
                            {currentState.validations.routeTo}
                        </div>
                    ) : (
                        ""
                    )}

                </div>

                <div className="form-group">
                    <label>Enter Pickup Point</label>
                    <input
                        name="pickupPoint"
                        type="text"
                        ref={pickupPointRef}
                        onChange={() => setFieldState(pickupPointRef)}
                        className="form-control"
                        required />
        
                </div>

                <div className="form-group">
                    <label>Enter fare</label>
                    <input
                        name="fare"
                        type="number"
                        ref={fareRef}
                        onChange={() => setFieldState(fareRef)}
                        className="form-control"
                        required />

                       <br />

                      <button className="btn-btn-primary">Update Route</button>

                </div>

                   
            
            </form>


            {
                response.route ? (

                    <div>
                        <h3>Route Updated Successfully</h3>
                        <DisplayRouteDetails route={response.route} />
                    </div>

                ) : ""}

            {
                response.error ? (

                    <div className={style.error}>
                        Route Request Was Not Successful <br />
                        {response.error}
                    </div>

                ) : ""}

        </div>
    );
}