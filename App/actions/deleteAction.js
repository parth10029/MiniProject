import {delete_user,SET_LOADER} from "./types";

export const userDelete = (userData) => {
    return (dispatch, getState) => {
        dispatch({type: SET_LOADER,payload: true});
        return fetch('http://localhost:5000/deleteusers/'+userData,
            {
                method : 'POST',
                headers : {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                //body: JSON.stringify(userData)
            }).then((response) => response.json())
            .then((responseJson) => {
                dispatch({type: SET_LOADER,payload: false});
                dispatch({
                    type: delete_user,
                    payload: responseJson.data
                });
                return Promise.resolve(responseJson);
            })
            .catch((error) => {
                dispatch({
                    type: SET_LOADER,
                    payload: false
                });
                return Promise.reject(error);
            });
    };
};
