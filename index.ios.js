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

class MySceneComponent extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navbar}>
                    <Text style={styles.back} onPress={this.props.onBack}>&lt;</Text>
                    <Text style={styles.forward} onPress={this.props.onForward}>&gt;</Text>
                </View>
                <View>
                    <Text>{this.props.name}</Text>
                </View>
            </View>
        );
    }
}

var ReactNativeNavigator = React.createClass({
    _onRef: function (ref, indexInStack) {
        console.log(ref, indexInStack);
    },
    render: function() {
        return (
            <Navigator
                initialRoute={{name: 'My First Scene', index: 0}}
                renderScene={(route, navigator) =>
                    <MySceneComponent
                        name={route.name}
                        onForward={() => {
                            var nextIndex = route.index + 1;
                            navigator.push({
                                name: 'Scene ' + nextIndex,
                                index: nextIndex,
                            });
                        }}
                        onBack={() => {
                            if (route.index > 0) {
                                navigator.pop();
                            }
                        }}
                    />
                }
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
        marginTop: 100,
        padding: 10
    },
    navbar: {
        flexDirection: 'row',
        marginBottom: 30,
    },
    back: {
        flex: 1
    },
    forward: {}
});

AppRegistry.registerComponent('ReactNativeNavigator', () => ReactNativeNavigator);
