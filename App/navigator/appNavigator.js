import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from '../components/Login';
import registration from '../components/registration';
import home from '../components/home';
import vendor from '../components/vendor';
import customer from '../components/customer';

const drawer=createStackNavigator({
    registration,
    Login,
    home,
    vendor,
    customer
},{
    initialRouteName:'Login'
});

export default createAppContainer(drawer);