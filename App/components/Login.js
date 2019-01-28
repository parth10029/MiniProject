import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, Text, ImageBackground, Image,AsyncStorage,TouchableOpacity} from 'react-native';
import AIcon from 'react-native-vector-icons/AntDesign';
import FIcon from 'react-native-vector-icons/FontAwesome';
import {NavigationActions, StackActions} from "react-navigation";
import {connect} from "react-redux";
import {userLogin} from "../actions/loginActions";
import constant from "../helper/themeHelper";

class Login extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            userData: [],
            username: '',
            password: '',
        }
    }

    storeData = async (user)=>{
        try {
            await AsyncStorage.setItem('user', JSON.stringify(user));
        } catch (error) {
            console.log(error)
        }
    }

    userlogin = () =>{
        debugger
        const {username,password} = this.state;
        this.props.userLogin({username,password})
            .then(res=>{
            const {userData} = this.props;
            if(userData.user_type === "customer"){
                //alert('Welcome '+userData.username)
                 this.storeData(userData)
                const {navigation} = this.props;
                navigation.dispatch(StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: 'customer' })],
                }));
            }else{
                // alert(userData.msg)
                const {navigation} = this.props;
                this.storeData(userData)
                navigation.dispatch(StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: 'vendor' })],
                }));
            }
        }).catch(err=>{
            alert("User not exists please Register")
        })
        // const {username, password} = this.state;
        // this.props.userLogin(username, password)
        //     .then((res)=>{
        //         //alert({res});
        //         const {navigation} = this.props;
        //         navigation.dispatch(StackActions.reset({
        //             index: 0,
        //             actions: [NavigationActions.navigate({ routeName: 'home' })],
        //         }));
        //     }).catch(err=>{
        //     alert("Login Failed!")
        // })
    };

    render() {
        const {navigate}=this.props.navigation;

        return (
            <ImageBackground source={require('./Images/uiImages/background.jpg')} style={styles.backgroundImage} blurRadius={2}>
                <View style={[styles.MainContainer,styles.logocontainer]}>
                    <Image source={require('./Images/uiImages/Company_logo.png')} style={styles.logo}/>

                    <Text style= {styles.title}>Welcome!</Text>

                    <View style={styles.viewsection}>
                        <AIcon name="user" size={constant.iconSize} color="#900" style={styles.usericon}/>
                    <TextInput
                        autoCapitalize="none"
                        placeholder="Enter User UserName"
                        placeholderTextColor={constant.appColor1}
                        onChangeText={username => this.setState({username : username})}
                        underlineColorAndroid='transparent'
                        style={styles.TextInputStyleClass}
                    />
                    </View>
                    <View style={styles.viewsection}>
                        <FIcon name="user-secret" size={constant.iconSize} color="#900" style={styles.usericon}/>
                    <TextInput
                        autoCapitalize="none"
                        placeholder="Enter User Password"
                        onChangeText={password => this.setState({password : password})}
                        placeholderTextColor={constant.appColor1}
                        underlineColorAndroid='transparent'
                        style={styles.TextInputStyleClass}
                        secureTextEntry={true}
                    />
                    </View>
                    <View style={styles.container}>
                    <TouchableOpacity onPress={this.userlogin} color={constant.appColor1}>
                        <Text style={styles.button}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigate('registration')} color={constant.appColor1}>
                        <Text style={styles.button}>Register</Text>
                    </TouchableOpacity>
                    </View>
                    </View>
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({

    container: {
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        borderWidth: 1,
        padding: 25,
        borderColor: 'black',
        color:constant.appColor1,
        fontWeight: 'bold'
    },
    backgroundImage:{
        flex:1,
        resizeMode: 'cover',
        alignSelf: 'stretch',
        width:null,
        padding:10,
    },
    logo:{
        width:240,
        height:240,
    },

    logocontainer:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    MainContainer :{
        justifyContent: 'center',
        margin: 10
    },

    viewsection:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    usericon:{
        padding: 6,
    },

    TextInputStyleClass: {
        textAlign: 'center',
        marginBottom: 7,
        height: 40,
        flex:1,
        alignSelf:'stretch',
        fontWeight:'bold',
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 5 ,
        backgroundColor:'#ffffff',
        color: '#424242',
    },

    title:{
        fontSize: 22,
        color: "#fa0505",
        textAlign: 'center',
        marginBottom: 15
    }
});

const mapStateToProps = (state) => {
    const {loading,userData} = state.userlogin;
    return {
        loading,
        userData
    };
};

export default connect(mapStateToProps,{
    userLogin
})(Login);