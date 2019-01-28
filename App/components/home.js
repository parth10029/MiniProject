import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    Image,
    AsyncStorage
} from 'react-native';
import {connect} from "react-redux";
import constant from '../helper/themeHelper';


export default class home extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentWillMount(){
        this.getData()
    }
    getData = async()=>{
        try {
            const value = await AsyncStorage.getItem('user');
            //alert(value)
            debugger
            if(value == null){
                this.props.navigation.navigate('Login');
            } else {
                debugger
                let parsedValue = JSON.parse(value)
                if (parsedValue.user_type === 'vendor') {
                    this.props.navigation.navigate('vendor');
                    // We have data!!
                    //console.log(value);
                }
                else if(parsedValue.user_type === 'customer'){
                    this.props.navigation.navigate('customer');
                }
            }
        } catch (error) {
            // Error retrieving data
        }
    }

    render() {
        return (
            <ImageBackground source={require('./Images/uiImages/background.jpg')} style={styles.backgroundImage} blurRadius={2}>
                <View style={[styles.MainContainer,styles.logocontainer]}>
                    <Image source={require('./Images/uiImages/Company_logo.png')} style={styles.logo}/>

                    <Text style= {styles.title}>Welcome!</Text>

                </View>
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({

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

    title:{
        fontSize: 22,
        color: constant.appColor1,
        //color: "#fa0505",
        textAlign: 'center',
        marginBottom: 15
    }
});
