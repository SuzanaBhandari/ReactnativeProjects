
import React, { Component } from 'react';
import { Text, View, StyleSheet,StatusBar } from 'react-native';
import Logo from '../components/Logo';
import Form from './Form'

class Signup extends Component {
   
  render() {
    return (
        <View style = {styles.container}>
            <Logo />
            <Form type="Signup" />
            <View style={styles.signUpTextCont}>
                <Text style={styles.signUpText}>Already have an account</Text>
                <TouchableOpacity noPress={this.goBack}><Text style={styles.signUpButton}>Signin</Text></TouchableOpacity>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#4a148c',
        alignItems:'center',
        justifyContent:"center"

    },
    signUpText:{
        color:'rgba(255,255,255,0.7)',
        fontSize: 16
    },
    signUpTextCont:{
        flexGrow:1,
        alignItems:'flex-end',
        justifyContent:'center',
        paddingVertical:16,
        flexDirection:'row',
    },
    signUpButton:{
        color:'#ffffff',
        fontSize:16,
        fontWeight:'500'

    }
})

export default Signup