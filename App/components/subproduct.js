import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image,
    ImageBackground,
    FlatList,
    AsyncStorage
} from 'react-native';
import constant from "../helper/themeHelper";
import {connect} from "react-redux";
import {showsubproduct} from "../actions/sub_productActions";
import Icon from "react-native-vector-icons/RNIMigration";
import IIcon from "react-native-vector-icons/Ionicons";
import AIcon from "react-native-vector-icons/AntDesign";


class subproduct extends Component {

    clearAsyncStorage = async() => {
        AsyncStorage.clear();
        this.props.navigation.navigate('Login')
    }


    constructor(props){
        super(props);
        this.state={
            subproduct: props.navigation.state.params.subproductdetail,
            refreshing:false,
        }
    }

    componentDidMount(){
        this.props.showsubproduct(this.state.subproduct.id)
    }
    keyExtractor = (item) => {
        return item.id + "";
    };

    renderSeparator = ({leadingItem, section})=>{
        return <View style={{height:10}}/>;
    };

    renderEmpty = () => {
        return <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text style={{fontSize:15}}>
                {"No data found"}
            </Text>
        </View>
    };

    onRefresh = () => {
        this.setState({refreshing: true});
        this.props.showsubproduct(this.state.subproduct.id).then(res=>{
            this.setState({refreshing: false});
        });
    };

    onRowClick = (item) => {
        this.props.navigation.navigate('product',{subproduct: item});
    };

    renderItem = ({item, index}) => {

        const {rowContainer} = styles;
        return(
            <ScrollView>

                    <TouchableOpacity
                        style={styles.opacitycss}
                        onPress={()=>this.onRowClick(item)}
                    >
                        <View key={index} style={styles.rowContainer}>
                            <Image source={{uri:'http://localhost:5000/'+item.image}} style={styles.flatimage} resizeMode='contain'/>
                            <Text style={{fontSize: 20}}>
                                {item.name}</Text>
                        </View>
                    </TouchableOpacity>

            </ScrollView>
        )
    };


    render() {
        const {refreshing} = this.state;
        const {subproductList} = this.props;
        console.log(this.props);

        return (
            <ImageBackground source={require('./Images/uiImages/background.jpg')} style={styles.backgroundImage} blurRadius={2}>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 30}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('customer')}>
                        <IIcon name="ios-arrow-back" size={30} style={styles.backbutton}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.clearAsyncStorage}>
                        <AIcon name="logout" size={30} style={styles.homebutton}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('customer')}>
                        <AIcon name="home" size={30} style={styles.homebutton}/>
                    </TouchableOpacity>
                </View>
                <View style={[styles.MainContainer,styles.logocontainer]}>
                    <Image source={require('./Images/uiImages/Company_logo.png')} style={styles.logo}/>
                    <View style={styles.container}>
                        <FlatList data={subproductList}
                                  contentContainerStyle={{top:20}}
                                  automaticallyAdjustContentInsets={false}
                                  renderItem={this.renderItem}
                                  keyExtractor={this.keyExtractor}
                                  ItemSeparatorComponent={this.renderSeparator}
                                  ListEmptyComponent={this.renderEmpty}
                                  onRefresh={this.onRefresh}
                                  refreshing={refreshing}
                                  ListFooterComponent={<View style={{ height: 50}}/>}
                        />
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

    backbutton:{
        color:"#000000"
    },

    opacitycss:{
        //flex:1,
        flexDirection:'row',

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
        borderColor:'#FF0000',
        marginLeft:10,
        marginRight:10,

    },

    flatimage:{
        height:100,
        width:100,

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
        //flex:1,
        flexDirection: 'row',
    },

    usericon:{
        padding: 6,
    },

    TextInputStyleClass: {
        textAlign: 'center',
        marginBottom: 7,
        height: 40,
        //flex:1,
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
        //flex: 1,
        paddingTop: 30,
    },

    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
        height: 100,
        //flex:1,
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
    const {loading,subproductList} = state.onRefreshsubproduct;
    return {
        loading,
        subproductList

    };
};

export default connect(mapStateToProps,{
    showsubproduct
})(subproduct);