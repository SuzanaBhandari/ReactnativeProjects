import React, { Component } from 'react';
import { Text, View, StyleSheet,TouchableOpacity,StatusBar } from 'react-native';
import Logo from './Logo';
import Form from './Form';
import Signup from './Signup';

class Login extends Component {
    static navigationOptions = {
        header: null
      };
  render() {
     
    return (
        <View style = {styles.container}>
            <Logo />
            <Form type="Login"/>
            <View style={{flexDirection:"row"}} >
                <Text style={styles.signUpText}> Don't have an account yet?</Text>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Signup")}><Text style={styles.signUpButton} style={styles.signUpText}>Signup</Text></TouchableOpacity>
            </View>
            {/* <View style={styles.signUpTextCont}> */}
                {/* <Text style={styles.signUpText}> Don't have an account yet?</Text> */}
               
            {/* </View> */}
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        alignItems:'center',
        justifyContent:"center"

    },
    signUpText:{
        // color:'rgba(255,255,255,0.7)',
        color:'black',
        fontSize: 16,
        bottom:50,
        margin:5
    },
    signUpTextCont:{
        flexGrow:1,
        alignItems:'flex-end',
        justifyContent:'center',
        paddingVertical:16,
        flexDirection:'row',
    },
    signUpButton:{
        color:'black',
        fontSize:16,
        fontWeight:'500'

    }
})

export default Login