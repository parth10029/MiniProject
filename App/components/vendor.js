import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';
import AIcon from 'react-native-vector-icons/AntDesign';
import FIcon from 'react-native-vector-icons/FontAwesome';
import Icon from "react-native-vector-icons/RNIMigration";
import {connect} from "react-redux";


export default class vendor extends Component<Props> {

    clearAsyncStorage = async() => {
        AsyncStorage.clear();
        this.props.navigation.navigate('Login')
    }

    nav = () => {
        this.props.navigation.navigate('addproduct');
    }

    render() {
        return (
            <ImageBackground source={require('./Images/uiImages/background.jpg')} style={styles.backgroundImage} blurRadius={2}>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 30}}>
                <TouchableOpacity onPress={this.clearAsyncStorage}>
                    <AIcon name="logout" size={30} style={styles.homebutton}/>
                </TouchableOpacity>
                </View>
                <View style={[styles.MainContainer,styles.logocontainer]}>
                    <Image source={require('./Images/uiImages/Company_logo.png')} style={styles.logo}/>

                    <Text style= {styles.title}>Welcome!</Text>
                    <View style={styles.viewsection}>
                    <TouchableOpacity>
                        <AIcon name="form" size={150} color="#900" style={styles.usericon} onPress={this.nav}/>
                        <Text style={styles.touchabletext}>Add product</Text>
                    </TouchableOpacity>
                    </View>
                    <View style={styles.viewsection}>
                    <TouchableOpacity>
                        {/*<AIcon name="form" size={30} color="#900" style={styles.usericon}/>*/}
                        <Image source={require('./Images/uiImages/myproduct.png')} style={styles.touchpic}/>
                        <Text style={styles.touchabletext}>My product</Text>
                    </TouchableOpacity>
                    </View>

                </View>
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({

    homebutton:{
        color:"#000000",
    },
    touchabletext:{
        color:'#fa0505',
        fontWeight: "bold",
        textAlign:"center"
    },
    touchpic:{
        flexDirection: 'row',
        width:200,
        height:200,
        alignItems: 'center',
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
        flex:1,
        flexDirection: 'row',
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