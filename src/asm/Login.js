import { Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const Login = () => {
  return (
    <SafeAreaView style = {styles.container}>
      <View style = {styles.head} >
      <Image style = {styles.img} source={require('../img/logo.png')} />
      <Text style = {styles.headText}>Food App</Text>
      <TextInput placeholder='Nhập Usename' placeholderTextColor="white" style ={styles.textInputName}/>
      <TextInput placeholder='Nhập Passworld' placeholderTextColor="white" style ={styles.textInputPass}/>
      </View>

     
      <View style = {styles.checkbox}>
        <BouncyCheckbox fillColor='red' size={20}></BouncyCheckbox>
        <Text style = {{color:'white'}}>Nhớ mật khẩu</Text>
        <Text style = {styles.forgetpass}>Quên mật khẩu</Text>
      </View>

      <Pressable style = {styles.buttonLogin}>
        <Text style = {styles.textLogin}>Đăng Nhập</Text>
      </Pressable>
      <Text style = {styles.textNext}>hoặc tiếp tục với</Text>

      <View style = {styles.groupLogin}>
      <Pressable style = {styles.buttonFacebook}>
        <Image style = {styles.imgfacebook} source={require('../img/facebook.png')}/>
        <Text style = {{fontWeight:'bold'}}>Facebook</Text>
      </Pressable>

      <Pressable style = {styles.buttonFacebook}>
        <Image style = {styles.imgfacebook} source={require('../img/google.png')}/>
        <Text style = {{fontWeight:'bold'}} >Google</Text>
      </Pressable>

      </View>

      <Text style = {styles.textNext}>Không có tài khoản?</Text>

    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
    backgroundColor:'black',
    height:'100%'
    },
    img:{
        width:100,
        height:150,
    },
    head:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:50,
    },
    headText:{
        marginTop:10,
        fontSize:28,
        fontWeight:'bold',
        color:'white',
    },

    textInputName:{
      height:45,
      borderRadius:20,
      borderWidth:0.9,
      width:350,
      marginTop:50,
      borderColor:'red',
      paddingLeft:10,
    },

    textInputPass:{
      height:45,
      borderRadius:20,
      borderWidth:0.9,
      width:350,
      marginTop:15,
      borderColor:'red',
      paddingLeft:10,
    },

    checkbox:{
      marginTop:10,
      marginStart:30,
      flexDirection:'row',
    },

    forgetpass:{
      marginStart:110,
      color:'red'
    },

    buttonLogin:{
      height:45,
      width:350,
      backgroundColor:'red',
      justifyContent:'center',
      alignItems:'center',
      marginStart:26,
      marginTop:25,
      borderRadius:20,
    },

    textLogin:{
      color:'white',
      fontWeight:'bold'
    },

    imgfacebook:{
      width:21,
      height:21,
      marginEnd:10,
    },

    buttonFacebook:{
      flexDirection:'row',
      width:174,
      height:48,
      backgroundColor:'#EFF1F4',
      justifyContent:'center',
      alignItems:'center',
      marginTop:20,
      borderRadius:10,
      marginEnd:10,
    },

    groupLogin:{
      flexDirection:'row',
      justifyContent:'center'
    },

    textNext:{
      textAlign:'center',
      marginTop:10,
      color:'white'
    }
    

})