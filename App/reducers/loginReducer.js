import { SET_USER_LIST, SET_LOADER,user_login } from "../actions/types";

const INITIAL_STATE = {
    loading: false,
    userData: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case user_login:{
            return{
                ...state,
                userData: action.payload
            }
        }
        default:
            return state;
    }
}