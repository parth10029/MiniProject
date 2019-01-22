import {SET_CAT_LIST} from "./types";

export const showcat = () => {
    return (dispatch, getState) => {
        return fetch('http://localhost:5000/getallcat')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({
                    type: SET_CAT_LIST,
                    payload: responseJson
                });
                return Promise.resolve(true);
            })
            .catch((error) => {
                alert(error);
            });
    };
};


// import {SET_CAT_LIST,SET_LOADER} from "./types";
//
// export const showcat = (catData) => {
//     return (dispatch, getState) => {
//         dispatch({type: SET_LOADER,payload: true});
//         return fetch('http://localhost:5000/getallcat',
//             {
//                 method : 'get',
//                 headers : {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(catData)
//             }).then((response) => response.json())
//             .then((responseJson) => {
//                 dispatch({type: SET_LOADER,payload: false});
//                 dispatch({
//                     type: SET_CAT_LIST,
//                     payload: responseJson.data
//                 });
//                 return Promise.resolve(responseJson);
//             })
//             .catch((error) => {
//                 dispatch({
//                     type: SET_LOADER,
//                     payload: false
//                 });
//                 return Promise.reject(error);
//             });
//     };
// };
