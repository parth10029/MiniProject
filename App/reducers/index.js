import { combineReducers } from 'redux';
import UserReducer from "./userReducer";
import PostReducer from "./postReducer";
import post_registration from "./registrationReducer";
import user_login from './loginReducer';


const appReducer = combineReducers({
    user: UserReducer,
    post: PostReducer,
    reg_user:post_registration,
    userlogin:user_login
});

export default appReducer;