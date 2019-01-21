import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, Text, ImageBackground, Image,TouchableOpacity} from 'react-native';
import AIcon from 'react-native-vector-icons/AntDesign';
import FIcon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {showcat} from '../actions/customerActions';
import {NavigationActions, StackActions} from "react-navigation";

class customer extends Component<Props> {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         dataSource: {},
    //
    //     }
    // }
    // showallcat = () =>{
    //     const {dataSource} = this.state;
    //     this.props.userRegistration({username, name, email, user_type,password})
    //         .then((res)=>{
    //             const {navigation} = this.props;
    //             navigation.dispatch(StackActions.reset({
    //                 index: 0,
    //                 actions: [NavigationActions.navigate({ routeName: 'Login' })],
    //             }));
    //         }).catch(err=>{
    //         alert("Registration Failed!")
    //     })
    // };
     render() {
         <View style={styles.TextInputStyleClass}><Text>hello user</Text></View>
    //     return (
    //         <ImageBackground source={require('./Images/uiImages/background.jpg')} style={styles.backgroundImage} blurRadius={2}>
    //             <View style={[styles.MainContainer,styles.logocontainer]}>
    //                 <Image source={require('./Images/uiImages/Company_logo.png')} style={styles.logo}/>
    //
    //                 <View style={styles.MainContainer1}>
    //                     <FlatList
    //                         data={this.showallcat}
    //                         renderItem={({ item }) => (
    //                             <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
    //                                 <Image style={styles.imageThumbnail} source={{ uri: item.src }} />
    //                             </View>
    //                         )}
    //                         //Setting the number of column
    //                         numColumns={3}
    //                         keyExtractor={(item, index) => index}
    //                     />
    //                 </View>
    //
    //             </View>
    //         </ImageBackground>
    //     );
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
const mapStateToProps = (state) => {
    const {loading} = state.reg_user;
    return {
        loading
    };
};

export default connect(mapStateToProps,{
    showcat
})(customer);