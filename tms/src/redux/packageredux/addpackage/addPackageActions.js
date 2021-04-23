
import { addPackage } from "../../service/PackageService";
import store from "../store";
import addPackageConstants from "./addPackageConstants";

function addPackageSuccess() {

    return ({

        pack: pack,
        error: '',
        type: addPackageConstants.success
    });

}

function addPackageFail(error) {

    return (

        {
            pack: undefined,
            error: error,
            type: addPackageConstants.fail
        });
}

function addPackageAction(data) {

    return () => {

        const promise = addPackage(data);
        promise.then(

            response => {

                const pack = response.data;
                let actionObj = addPackageSuccess(pack);
                store.dispatch(actionObj);
            }

        ).catch(error => {

            let actionObj = addPackageFail(error.message);
            store.dispatch(actionObj);
        })

    }


}

export { addPackageAction, addPackageSuccess, addPackageFail };