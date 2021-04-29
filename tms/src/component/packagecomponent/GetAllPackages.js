
import { useEffect } from "react";
import commonStyle from './commonStyle.module.css';
import DisplayPackageList from "./DisplayPackageList";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPackagesAction } from "../../redux/packageredux/fetchallpackages//fetchAllPackagesActions";

export default function GetAllPackages() {


    const currentState = useSelector(state => {

        return {

            packs: state.fetchAllPackages.packs,
            error: state.fetchAllPackages.error,

        };
    })

    const dispatch = useDispatch();

    const fetchAll = () => {

        console.log("inside use state function")
        dispatch(fetchAllPackagesAction());
    };

    useEffect(fetchAll, []);

    console.log("inside getall packages", currentState.packs);

    return (
        <div>

            <h1>Get All Packages</h1>

            <div className={commonStyle.content}>
                <ul >

                    {currentState.packs ? (

                        <DisplayPackageList packs={currentState.packs} />

                    ) : ''}



                </ul>

            </div>
            { currentState.error ? (

                <div className={commonStyle.error}>
                    Get All Packages Error in request processing
                    <br />
                    {currentState.error}
                </div>
            ) : ''}


        </div>

    )

}
