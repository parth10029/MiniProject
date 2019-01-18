import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, Text, ImageBackground, Image,TouchableOpacity} from 'react-native';
import AIcon from 'react-native-vector-icons/AntDesign';
import FIcon from 'react-native-vector-icons/FontAwesome';

export default class vendor extends Component<Props> {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         username: '',
    //         name: '',
    //         email: '',
    //         usertype: '',
    //         password: '',
    //     }
    // }
    //
    // UserLoginFunction = () =>{
    //
    //     fetch('http://localhost:5000/users', {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //
    //             username: this.state.username,
    //
    //             password: this.state.password
    //         })
    //     }).then((response) => response.json())
    //         .then((responseJson) => {
    //             // Showing response message coming from server after inserting records.
    //             // alert(responseJson);
    //             this.props.navigation.navigate('home');
    //
    //         }).catch((error) => {
    //         console.error(error);
    //     });
    //
    // }

    render() {
        return (
            <ImageBackground source={require('./Images/uiImages/background.jpg')} style={styles.backgroundImage} blurRadius={2}>
                <View style={[styles.MainContainer,styles.logocontainer]}>
                    <Image source={require('./Images/uiImages/Company_logo.png')} style={styles.logo}/>

                    <Text style= {styles.title}>Welcome!</Text>
                    <View style={styles.viewsection}>
                        <TouchableOpacity>
                            <Image source={require('./Images/uiImages/tablet.png')} style={styles.touchpic}/>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image source={require('./Images/uiImages/mobile.png')} style={styles.touchpic}/>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.viewsection}>
                        <TouchableOpacity>
                            <Image source={require('./Images/uiImages/computer.png')} style={styles.touchpic}/>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image source={require('./Images/uiImages/wearable.png')} style={styles.touchpic}/>
                        </TouchableOpacity>
                    </View>

                </View>
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({

    touchpic:{
        flexDirection: 'row',
        width:190,
        height:190,
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