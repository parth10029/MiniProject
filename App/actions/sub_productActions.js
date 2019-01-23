import {SET_SUBPRODUCT_LIST} from "./types";

export const showsubproduct = (subproductList) => {
    debugger
    return (dispatch, getState) => {
        return fetch('http://localhost:5000/getsubproduct_byid/'+subproductList)
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({
                    type: SET_SUBPRODUCT_LIST,
                    payload: responseJson
                });
                return Promise.resolve(true);
            })
            .catch((error) => {
                alert(error);
            });
    };
};