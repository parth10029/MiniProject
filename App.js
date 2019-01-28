/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Animated, FlatList, Platform, StyleSheet, Text, View} from 'react-native';

console.disableYellowBox = true;
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
// class FlatListItem extends Component<Props> {
//     render() {
//         return (
//
//         )
//     }
// }
export default class App extends Component<Props> {
    constructor(props) {
        super(props)
        this.state = {
            scrollYPosition: 0,
        }
        this.scrollPosition = new Animated.Value(1)
    }
    renderItem = ({item, index}) => {
        let topIndex = this.state.scrollYPosition < 0 ? 0 : Math.floor(this.state.scrollYPosition/100)
        console.log(this.state.scrollYPosition , ' ---- ',topIndex)
        const itemOpacity = this.scrollPosition.interpolate({
            inputRange: [topIndex*100, (topIndex*100)+50],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        });
        let opc
        if (index < topIndex) {
            opc = 0
        } else if (index === topIndex) {
            opc = itemOpacity
        } else {
            opc = 1
        }
        return (
            <Animated.View style={{height: 80, margin: 10, backgroundColor: 'red', opacity: index === topIndex ? itemOpacity : opc}}>
                <Text>dfdsfdfsfsdf</Text>
            </Animated.View>
        )
    }
    handleScroll = (event) => {
        this.setState({ scrollYPosition: event.nativeEvent.contentOffset.y });
    }

    render() {
        return (
            <View style={{marginTop: 50}}>
                <FlatList
                    renderItem={this.renderItem}
                    data={Array.from({length: 25}).fill('hellooooododfsdff')}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.scrollPosition } } }],
                        { listener: this.handleScroll },
                    )}
                    scrollEventThrottle={1}/>
            </View>
        )
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text style={styles.instructions}>{instructions}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
