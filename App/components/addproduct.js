import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, Text, ImageBackground, Image,TouchableOpacity} from 'react-native';
import FIcon from 'react-native-vector-icons/Feather';
import EIcon from 'react-native-vector-icons/Entypo';
import {connect} from 'react-redux';
import {showcat} from '../actions/categoryActions';
import {NavigationActions, StackActions} from "react-navigation";
import ImagePicker from "react-native-image-picker";


export default class customer extends Component<Props> {

    state = {
        pickedImage: null
    }

    reset = () => {
        this.setState({
            pickedImage: null
        });
    }

    pickImageHandler = () => {
        ImagePicker.showImagePicker({title: "Pick an Image", maxWidth: 800, maxHeight: 600}, res => {
            if (res.didCancel) {
                console.log("User cancelled!");
            } else if (res.error) {
                console.log("Error", res.error);
            } else {
                this.setState({
                    pickedImage: { uri: res.uri }
                });

            }
        });
    }

    resetHandler = () =>{
        this.reset();
    }

    render() {
        return (
            <ImageBackground source={require('./Images/uiImages/background.jpg')} style={styles.backgroundImage} blurRadius={2}>
                <View style={[styles.MainContainer,styles.logocontainer]}>
                    <Image source={require('./Images/uiImages/Company_logo.png')} style={styles.logo}/>
                    <Text>Fill the Product form</Text>
                    <View style={styles.viewsection}>
                        <FIcon name="type" size={30} color="#900" style={styles.usericon}/>
                        <TextInput
                            placeholder="Product Name"
                            placeholderTextColor={'#fa0505'}
                            onChangeText={username => this.setState({username : username})}
                            underlineColorAndroid='transparent'
                            style={styles.TextInputStyleClass}
                        />
                    </View>

                    <View style={styles.viewsection}>
                        <EIcon name="price-tag" size={30} color="#900" style={styles.usericon}/>
                        <TextInput
                            placeholder="Price"
                            placeholderTextColor={'#fa0505'}
                            onChangeText={username => this.setState({username : username})}
                            underlineColorAndroid='transparent'
                            style={styles.TextInputStyleClass}
                        />
                    </View>

                    <View>
                        <View style={styles.container11}>
                            <View style={styles.placeholder11}>
                                <Image source={this.state.pickedImage} style={styles.previewImage11} />
                            </View>
                            <View style={styles.button11}>

                                <Button title="Pick Image" onPress={this.pickImageHandler} />

                                <Button title="Reset" onPress={this.resetHandler} />

                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        );
    }

}
const styles = StyleSheet.create({

    container11: {
        alignItems:"center"
    },
    placeholder11: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#eee",
        width: "70%",
        height: 180,
        marginTop:50,
    },
    button11: {
        width: "80%",
        marginTop:20,
        flexDirection:"row",
        justifyContent: "space-around"
    },
    previewImage11: {
        width: "100%",
        height: "100%"
    },
    //
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
    MainContainer1: {
        justifyContent: 'center',
        flex: 1,
        paddingTop: 30,
    },

    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
    },

    title:{
        fontSize: 22,
        color: "#fa0505",
        textAlign: 'center',
        marginBottom: 15
    }
});