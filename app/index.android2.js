'use strict';

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

class HelloWorld extends React.Component {
  _onPressButton() {
    console.log("You tapped the button!");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>Hello, React Native Again</Text>
        <Image source={{uri: 'node_modules_reactnative_libraries_customcomponents_navigationexperimental_assets_backicon'}} style={{width: 40, height: 40}} />
        <Image source={{uri: 'ic_launcher'}} style={{width: 40, height: 40}} />
        <Image source={{uri: 'ic_launcher_drawable'}} style={{width: 40, height: 40}} />
        <Image source={require('../webwxgetmsgimg.png')} style={{width:40, height:40}} />
        <Image source={{uri: 'http://yp-express.com/images/logo.jpeg'}} />
        <Text style={styles.hello}>Hello, React Native Again</Text>
        <Image source={{uri: 'http://yp-express.com/images/logo.jpeg'}}>
            <Text>Inside</Text>
         </Image>
         <TouchableHighlight onPress={this._onPressButton}>
             <Text style={{ fontSize: 28}}>Button</Text>
         </TouchableHighlight>
         <View accessible={true}>
           <Text>text one</Text>
           <Text>text two</Text>
         </View>
         <TouchableOpacity accessible={true} accessibilityLabel={'Tap me!'} onPress={this._onPress}>
           <View style={styles.button}>
             <Text style={styles.buttonText}>Press me!</Text>
           </View>
         </TouchableOpacity>
      </View>
    )
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);