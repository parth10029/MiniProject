import { SET_SUBPRODUCT_LIST, SET_LOADER } from "../actions/types";

const INITIAL_STATE = {
    subproductList: [],
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_SUBPRODUCT_LIST:{
            return{
                ...state,
                subproductList: action.payload
            }
        }
        case SET_LOADER:{
            return{
                ...state,
                loading: action.payload
            }
        }
        default:
            return state;
    }
}