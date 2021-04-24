
import { fetchAllPackages } from "../../../service/PackageService";
import store from "../../store";
import fetchAllPackagesConstants from "./fetchAllPackagesConstants";


function fetchAllPackagesRequest() {
    return (
        {
            progress: true,
            packs: [],
            error: '',
            type: fetchAllPackagesConstants.fetchAllPackagesRequest
        }
    );

}

function fetchAllPackagesSuccess(packs) {

    return (
        {
            progress: false,
            packs: packs,
            error: '',
            type: fetchAllPackagesConstants.fetchAllPackagesSuccess
        });
}


function fetchAllPackagesFail(error) {

    return (
        {
            progress: false,
            packs: [],
            error: error,
            type: fetchAllPackagesConstants.fetchAllPackagesFail
        });


}

function fetchAllPackagesAction() {

    return () => {

        store.dispatch(fetchAllPackagesRequest());
        const promise = fetchAllPackages();

        promise.then((response) => {

            const packs = response.data;
            store.dispatch(fetchAllPackagesSuccess(packs));

        }).catch(error => {

            store.dispatch(fetchAllPackagesFail(error.message));
        })

    }

}

export { fetchAllPackagesAction, fetchAllPackagesFail, fetchAllPackagesSuccess, fetchAllPackagesRequest };