import {SET_PRODUCT_LIST} from "./types";

export const showproduct = (productList) => {
    debugger
    return (dispatch, getState) => {
        return fetch('http://localhost:5000/getproduct_subid/'+productList)
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({
                    type: SET_PRODUCT_LIST,
                    payload: responseJson
                });
                return Promise.resolve(true);
            })
            .catch((error) => {
                alert(error);
            });
    };
};