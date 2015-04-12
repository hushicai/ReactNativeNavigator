/**
* Sample React Native App
* https://github.com/facebook/react-native
*/
'use strict';

var React = require('react-native');
var {
    AppRegistry,
    Navigator,
    StyleSheet,
    Text,
    View,
} = React;

var ReactNativeNavigator = React.createClass({
    _renderScene: function (route, navigator, onRef) {
        switch (route.id) {
            case 'x':
                return (
                    <View style={styles.container}>
                        <Text style={styles.text} onPress={() => {
                            navigator.push({id: 'y'});
                        }}>
                            second scene
                        </Text>
                    </View>
                );
            case 'y':
                return (
                    <View style={styles.container}>
                        <Text style={styles.text} onPress={() => {
                            navigator.popToTop();
                        }}>
                            third scene
                        </Text>
                    </View>
                );
            default:
                return (
                    <View style={styles.container}>
                        <Text style={styles.text} onPress={() => {
                            navigator.push({id: 'x'});
                        }}>
                            {route.message}
                        </Text>
                    </View>
                );
        }
    },
    _onRef: function (ref, indexInStack) {
        console.log(ref, indexInStack);
    },
    render: function() {
        return (
            <Navigator 
                initialRoute={{message: 'first scene'}}
                renderScene={this._renderScene}
                onItemRef={this._onRef}
                configureScene={(route) => {
                    if (route.sceneConfig) {
                        return route.sceneConfig;
                    }
                    return Navigator.SceneConfigs.FloatFromRight;
                }}
            />
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    text: {
        fontSize: 20
    }
});

AppRegistry.registerComponent('ReactNativeNavigator', () => ReactNativeNavigator);
