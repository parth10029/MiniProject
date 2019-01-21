import {post_registration} from "./types";

export const addUser = () => {
    return (dispatch, getState) => {
        return fetch('http://localhost:5000/addusers')
            .then((response) => response.json())
            .then((responseJson) => {
                // debugger;
                dispatch({
                    type: post_registration,
                    payload: responseJson
                });
                return Promise.resolve(true);
            })
            .catch((error) => {
                alert(error);
            });
    };
};


// fetch('http://localhost:5000/users', {
//     method: 'POST',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//
//         username: this.state.username,
//
//         password: this.state.password
//     })
// }).then((response) => response.json())
//     .then((responseJson) => {
//         // Showing response message coming from server after inserting records.
//         // alert(responseJson);
//         this.props.navigation.navigate('home');
//
//     }).catch((error) => {
//     console.error(error);
// });