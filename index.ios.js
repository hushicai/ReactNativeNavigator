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

/**
 * 自定义场景组件
 *
 * @class
 * @extends React.Component
 */
class MySceneComponent extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navbar}>
                    <Text style={[styles.base, styles.back]} onPress={this.props.onBack}>&lt;</Text>
                    <Text style={[styles.base, styles.forward]} onPress={this.props.onForward}>&gt;</Text>
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
        // 这里的ref打印出来的是一个React Component实例
        // 但React Component貌似有一个`ref`属性（可以是字符串，也可以是一个函数）
        //
        // 尼玛`Navigator`文档中的ref到底怎么翻译好？
        console.log(ref.props);
    },
    render: function() {
        return (
            <Navigator
                initialRoute={{name: 'My First Scene', index: 0}}
                onItemRef={this._onRef}
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
        padding: 20
    },
    navbar: {
        flexDirection: 'row',
        marginBottom: 30,
    },
    base: {
        fontSize: 20,
        color: 'blue'
    },
    back: {
        flex: 1
    },
    forward: {}
});

AppRegistry.registerComponent('ReactNativeNavigator', () => ReactNativeNavigator);
