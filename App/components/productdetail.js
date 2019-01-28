import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, ImageBackground, FlatList} from 'react-native';
import constant from "../helper/themeHelper";
import {connect} from "react-redux";
import {showproductById} from "../actions/productActions";
import IIcon from "react-native-vector-icons/Ionicons";
import AIcon from "react-native-vector-icons/AntDesign";

class productdetail extends Component {


    constructor(props){
        super(props);
        this.state={
            refreshing:false,

        }
    }
//     componentDidMount(){
// debugger
//         const id = this.props.navigation.getParam('productdetails','no-details');
//         this.props.showproductById(id)
//
//     }
//     keyExtractor = (item) => {
//         return item.id + "";
//     };
//
//     renderSeparator = ({leadingItem, section})=>{
//         return <View style={{height:10}}/>;
//     };
//
//     renderEmpty = () => {
//         return <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
//             <Text style={{fontSize:15}}>
//                 {"No data found"}
//             </Text>
//         </View>
//     };
//
//     renderItem = ({item, index}) => {
//         const {rowContainer} = styles;
//         return(
//             <ScrollView>
//
//                 {/*<TouchableOpacity*/}
//                     {/*style={styles.opacitycss}*/}
//                 {/*>*/}
//                     <View key={index} style={styles.rowContainer}>
//                         <Image source={{uri:'http://localhost:5000/'+item.image}} style={styles.flatimage} resizeMode='contain'/>
//                         <Text style={{fontSize: 20}}>
//                             {item.product_name}</Text>
//                         <Text style={{fontSize: 20}}>
//                             {item.price}</Text>
//                         <Text style={{fontSize: 20}}>
//                             {item.detail}</Text>
//                     </View>
//                 {/*</TouchableOpacity>*/}
//
//             </ScrollView>
//         )
//     };


    render() {
        // const {refreshing} = this.state;
        // const {productList} = this.props;
        // console.log(this.props);
        const item = this.props.navigation.getParam('productdetails','no-details');
        return (
            <ImageBackground source={require('./Images/uiImages/background.jpg')} style={styles.backgroundImage} blurRadius={2}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingTop: 30}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('subproduct')}>
                        <IIcon name="ios-arrow-back" size={30} style={styles.backbutton}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('customer')}>
                        <AIcon name="home" size={30} style={styles.homebutton}/>
                    </TouchableOpacity>
                </View>
                <View>
                    <Image source={{uri:'http://localhost:5000/'+item.image}} style={styles.flatimage} resizeMode='contain'/>
                </View>
                    {/*<View style={styles.container}>*/}
                        {/*<FlatList data={productList}*/}
                                  {/*contentContainerStyle={{top:20}}*/}
                                  {/*automaticallyAdjustContentInsets={false}*/}
                                  {/*renderItem={this.renderItem}*/}
                                  {/*keyExtractor={this.keyExtractor}*/}
                                  {/*ItemSeparatorComponent={this.renderSeparator}*/}
                                  {/*ListEmptyComponent={this.renderEmpty}*/}
                                  {/*// onRefresh={this.onRefresh}*/}
                                  {/*refreshing={refreshing}*/}
                                  {/*ListFooterComponent={<View style={{ height: 50}}/>}*/}
                        {/*/>*/}
                    {/*</View>*/}
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({

    homebutton:{
        color:"#000000",
    },

    backbutton:{
        color:"#000000"
    },

    titleText: {
        fontSize: 12,
        alignSelf: 'center',
        marginBottom: 20
    },
    rowContainer: {
        flex:1,
        borderRadius:5,
        padding:25,
        borderWidth:1,
        height:200,
        borderColor:'#FF0000',
        marginLeft:10,
        marginRight:10
    },
    flatimage:{
        height:'80%',
        width:'100%',
        flexDirection:'row'
    },
    container: {
        flex: 1,
        width:'100%',
        backgroundColor: constant.appColor,
        justifyContent:'center',
    },
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

    usericon:{
        padding: 6,
    },

    TextInputStyleClass: {
        textAlign: 'center',
        marginBottom: 7,
        height: 40,
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
        paddingTop: 30,
    },

    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
        height: 100,
        margin: 5,
    },

    title:{
        fontSize: 22,
        color: "#fa0505",
        textAlign: 'center',
        marginBottom: 15
    }
});

const mapStateToProps = (state) => {
    const {loading,productList} = state.onRefreshproduct;
    return {
        loading,
        productList
    };
};

export default connect(mapStateToProps,{
    showproductById
})(productdetail);