import React, { useEffect, useState } from "react"
import DisplayCustomerDetails from "./DisplayCustomerDetails"
import commonStyle from "./commonStyle.module.css"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"





export default function GetCustomerDetailsPackageId({routeId}) {

    const currentState=useSelector(state=>{
        return({
            customer:state.fetchCustomerById.customer,
            error:state.fetchCustomerById.error

        })
    })

    const dispatch=useDispatch();

    const fetchCustomerOnRender=()=>{
        const id=props.match.params.id;
        dispatch(fetchCustomerById(id));
    }
    
    useEffect(fetchCustomerOnRender(),[]);

    return (
        <div>
            {
                currentState.customer ? (
                    <div>
                        <DisplayCustomerDetails customer={currentState.customer} />
                    </div>

                ) : ""}

            {
                currentState.errMsg ? (
                    <div className={commonStyle.error}>
                        Customer Request Processing Unsuccessful
                        <br />
                        {currentState.errMsg}
                    </div>
                ) : ""}
        </div>
    
    )








}