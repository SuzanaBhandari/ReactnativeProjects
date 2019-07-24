import React, { Component } from 'react'
import { Text, View, ActivityIndicator,StyleSheet,StatusBar,TextInput,TouchableOpacity, Alert,ScrollView } from 'react-native'
import { withNavigation } from "react-navigation"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
class Form extends Component {

    constructor(){
        super()
        this.state ={
            email: "",
            password: "",

        }
    }


    // componentWillMount() {
    //     this.fetchLoginData();
    // }
    // fetchLoginData = () =>
    // {
        
    //     let formdata = new FormData();
    //     formdata.append("email", this.state.email);
    //     formdata.append("password", this.state.password)
    //     var url = 'http://192.168.1.71/ygen/';
    //     fetch(url,
    //     {
    //     method: 'POST',
    //     body:formdata,
    //     headers: new Headers ({
    //         Accept: 'application/json',
    //         'Content-Type': 'multipart/form-data',
    //     })
    //     }).then(res => res.json())
    //     .catch(error => console.error('Error:',error))
    //     .then(response => {
    //         if (response.status == 200) {
    //             console.log(response);
    //             this.props.navigation.navigate('Dashboard');
    //             return response;
                
               
                
    //         } else {
    //             console.log('Success:',response.status);
    //             Alert.alert("Login Failed");
    //         }
    //     });
    //     // return response;
    
    


    render(){ 
    return (
    <View style={styles.container}>
    
        <TextInput style={styles.inputBox} 
        underlineColorAndroid='rgba(0,0,0,0)' 
        selectionColor="#ffff" 
        placeholder="Email" 
        keyboardType="email-address" 
        placeholderTextColor="#ccc" 

        onChangeText= {text => this.setState ({email : text} )}
        onSubmitEditing={()=> this.password.focus()}/>

        <TextInput style={styles.inputBox} 
        underlineColorAndroid='rgba(0,0,0,0)' 
        placeholder="Password"
        placeholderTextColor="#ccc"

        onChangeText= {text => this.setState({password : text})}
        secureTextEntry={true} 
        ref={(input) => this.password = input}/>
        <TouchableOpacity style={styles.button} >

            <Text style={styles.buttonText}>{this.props.type}</Text>
        </TouchableOpacity>
    
    </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flexGrow:1,
        justifyContent:'center',
        alignItems: 'center'
    },
    inputBox:{
        width: wp('80%'),
        backgroundColor:'rgba(0,0,0,0.9)',
        borderRadius: 25,
        paddingHorizontal:16,
        fontSize:16,
        color:"#fff",
        marginVertical:10
    },
    list:{
        paddingVertical: 4,
        margin: 5,
        backgroundColor: "#fff"
       },
    button:{
        width: wp('80%'),
        backgroundColor:'#7ed857',
        borderRadius:25,
        paddingVertical: 12,
        marginVertical:10,
    },
    buttonText:{
        fontSize:16,
        fontWeight:'500',
       
        color:'white',
        textAlign: 'center'
        
    }
})

export default withNavigation(Form);



// import React, { Component } from 'react'
// import { AsyncStorage,TextInput,Keyboard,Text, View } from 'react-native'



// export default class Form extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             email:'',
//             password:''
//         }
//     }

//     saveData = async() =>
//     {
//         const {email,password} = this.state;

//         //save data with asyncstorage
//         let loginDetails ={
//             email: email,
//             password:password
//         }
//         if(this.props.type !== 'Login'){
//             AsyncStorage.setItem('loginDeatils',JSON.stringify(loginDetails))
//             Keyboard.dismiss();
//             alert("You successfully registered Email:" +email +'Password:' +password);
//             this.login();
//         }
//         else if(this.props.type == 'Login')
//         {
//             try{
//                 let loginDetails = await AsyncStorage.getItem('loginDetails');
//                 let ld = JSON.parse(loginDetails);
 
//                 if (ld.email != null && ld.password != null)
//                 {
//                     if (ld.email == email && ld.password == password)
//                     {
//                         alert('Go in!');
//                     }
//                     else
//                     {
//                         alert('Email and Password does not exist!');
//                     }
//                 }
 
//             }catch(error)
//             {
//                 alert(error);
//             }
//         }

//     }
    
//     showData = async()=>{
//         let loginDetails = await AsyncStorage.getItem('loginDetails');
//         let ld = JSON.parse(loginDetails);
//         alert('email: '+ ld.email + ' ' + 'password: ' + ld.password);
//     }


//     render() 
//     {
//         return (
//             <View style={styles.container}>
//                 <TextInput style={styles.inputBox}
//                 onChangeText={(email) => this.setState({email})}
//                 underlineColorAndroid='rgba(0,0,0,0)' 
//                 placeholder="Email"
//                 placeholderTextColor = "#002f6c"
//                 selectionColor="#fff"
//                 keyboardType="email-address"
//                 onSubmitEditing={()=> this.password.focus()}/>
                
//                 <TextInput style={styles.inputBox}
//                 onChangeText={(password) => this.setState({password})} 
//                 underlineColorAndroid='rgba(0,0,0,0)' 
//                 placeholder="Password"
//                 secureTextEntry={true}
//                 placeholderTextColor = "#002f6c"
//                 ref={(input) => this.password = input}
//                 />
 
//                 <TouchableOpacity style={styles.button}> 
//                     <Text style={styles.buttonText} onPress={this.saveData}>{this.props.type}</Text>
//                 </TouchableOpacity>
//             </View>
//         )
//     }
// }
// const styles = StyleSheet.create({
//     container: {
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     inputBox: {
//         width: 300,
//         backgroundColor: '#eeeeee', 
//         borderRadius: 25,
//         paddingHorizontal: 16,
//         fontSize: 16,
//         color: '#002f6c',
//         marginVertical: 10
//     },
//     button: {
//         width: 300,
//         backgroundColor: '#4f83cc',
//         borderRadius: 25,
//         marginVertical: 10,
//         paddingVertical: 12
//     },
//     buttonText: {
//         fontSize: 16,
//         fontWeight: '500',
//         color: '#ffffff',
//         textAlign: 'center'
//     }
// });