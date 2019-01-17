import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from '../components/Login';
import registration from '../components/registration';
import home from '../components/home';

const drawer=createStackNavigator({
    registration,
    Login,
    home
},{
    initialRouteName:'Login'
});

export default createAppContainer(drawer);