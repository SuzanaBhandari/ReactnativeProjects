import React, { Component } from 'react'
import { Text, View, StyleSheet,StatusBar, Image} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
class Logo extends Component {
  render() {
    return (
        <View style={styles.container}>
            <Image 
            // style = {{ width: wp('50%'), height: hp("50%")}}
        
            style = {{ width:256, height:256}}
            source={require('../images/logo.png')}
            />
            <Text style={styles.logoText}>YGEN ERP</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:'center',
        // alignItems: 'center',
        marginTop:20
    },
    logoText:{
        fontSize:25,
        textAlign:'center',
        marginVertical:15,
        color:'rgba(255, 255, 255, 0.7)'
    }
})

export default Logo