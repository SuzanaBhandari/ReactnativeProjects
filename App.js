
import React, { Component } from 'react'
import { Text, View, StyleSheet,StatusBar } from 'react-native'
import Login from './src/components/Login'
import Signup from './src/components/Signup'

import { createStackNavigator, createAppContainer } from "react-navigation";

class App extends Component {
  render() {
    return (
    //   <View style = {styles.container}>
    //     <StatusBar backgroundColor="#12005e"
    //     barStyle ="light-content" />
       <AppContainer />
    //   </View>
    )
  }
}
const RootStack = createStackNavigator(
    {
      Login: Login,
      Signup: Signup,
     
    },
    {
      initialRouteName: 'Login',
    }
  );
  
const AppContainer = createAppContainer(RootStack);

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#4a148c',
        alignItems:'center',
        justifyContent:"center"
    }
})

export default App