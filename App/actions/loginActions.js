import {user_login,SET_LOADER} from "./types";

export const userLogin = (userData ) => {
    debugger
    return (dispatch, getState) => {
        dispatch({type: SET_LOADER,payload: true});
        return fetch('http://localhost:5000/loginusers/'+userData.username+'/'+userData.password)
            .then((response) => response.json())
            .then((responseJson) => {

                dispatch({
                    type: user_login,
                    payload: responseJson
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
