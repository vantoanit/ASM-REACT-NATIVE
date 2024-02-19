import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native'
import React from 'react'

const Register = () => {
  return (
    <SafeAreaView style = {styles.container}>
        
     <View style = {styles.head} >
      <Image style = {styles.img} source={require('../img/logo.png')} />
      <Text style = {styles.headText}>Food App</Text>
      <TextInput placeholder='Nhập Fullname' placeholderTextColor="white" style ={styles.textInputName}/>
      <TextInput placeholder='Nhập Email'placeholderTextColor="white" style ={styles.textInputPass}/>
      <TextInput placeholder='Nhập Username'placeholderTextColor="white" style ={styles.textInputPass}/>
      <TextInput placeholder='Nhập Passworld'placeholderTextColor="white" style ={styles.textInputPass}/>
      <TextInput placeholder='Nhập lại Passworld'placeholderTextColor="white" style ={styles.textInputPass}/>
      </View>

      <Pressable style = {styles.buttonLogin}>
        <Text style = {styles.textLogin}>Đăng Ký</Text>
      </Pressable>

    </SafeAreaView>
  )
}

export default Register

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
})