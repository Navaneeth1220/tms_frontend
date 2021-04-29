
import { updatePackage } from "../../../service/PackageService";
import store from "../../bookingredux/store";
import updatePackageConstants from "./updatePackageConstants";

function updatePackageSuccess(pack) {

    return ({

        pack: pack,
        error: '',
        type: updatePackageConstants.success
    });

}

function updatePackageFail(error) {

    return (

        {
            pack: undefined,
            error: error,
            type: updatePackageConstants.fail
        });
}

function updatePackageAction(data) {

    return () => {

        const promise = updatePackage(data);
        promise.then(

            response => {

                const pack = response.data;
                let actionObj = updatePackageSuccess(pack);
                store.dispatch(actionObj);
            }

        ).catch(error => {

            let actionObj = updatePackageFail(error.message);
            store.dispatch(actionObj);
        })

    }


}

export { updatePackageAction, updatePackageSuccess, updatePackageFail };