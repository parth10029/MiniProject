import { SET_USER_LIST, SET_LOADER, SET_USER_DATA,delete_user } from "../actions/types";

const INITIAL_STATE = {
    loadings: false,
    userData: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case delete_user:{
            return{
                ...state,
                userData: action.payload
            }
        }
        default:
            return state;
    }
}