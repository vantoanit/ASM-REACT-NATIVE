import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
const Contact = () => {
  return (

    <SafeAreaView >
         <View style={{ flexDirection:'row', padding:10, width:'100%', height:50, backgroundColor:'black'}}>
            <View style = {styles.icons}>
            <Text><Icon name="reply" size={25} color="#999"  /></Text>
            </View>
            <View style = {{marginLeft:120}}>
            <Text style = {{ color:'white', fontWeight:'bold', fontSize:20}}>Contact</Text>
            </View>
            </View>
       <View style = {styles.container}>
        <View>
            <Text style = {styles.titel}>Liên Hệ Ngay</Text>
        </View>
        <View>
            <TextInput style = {styles.inputname} placeholder='Họ và tên' placeholderTextColor='#ffffff'/>
            <TextInput style = {styles.inputname} placeholder='Địa chỉ' placeholderTextColor='#ffffff'/>
            <TextInput style = {styles.inputname} placeholder='Số điện thoại'placeholderTextColor='#ffffff'/>
            <TextInput style = {styles.inputname} placeholder='Email' placeholderTextColor='#ffffff'/>
        </View>

        <View>
            <TextInput style = {styles.inputnoidung} placeholder='Nhập thông tin liên hệ' placeholderTextColor='#ffffff'/>
        </View>

        <View style = {styles.buttoncontainer}>
            <Pressable style = {styles.buttonlienhe}>
                <Text style = {{color:'white', fontWeight:'bold',}}>Gửi liên hệ</Text>
            </Pressable>
        </View>
        </View>
    </SafeAreaView>
  )
}

export default Contact

const styles = StyleSheet.create({
    container:{
        marginHorizontal:20,
        margin:40,
        justifyContent:'center',
        borderWidth:1,
        borderRadius:10,
        padding:10,
        backgroundColor:'black'
    },

    inputname:{
        width:'200',
        height:'50',
        borderWidth:1,
        borderRadius:5,
        margin:8,
        borderColor:'#C0C0C0',
    },

    inputnoidung:{
        width:'200',
        height:150,
        borderWidth:1,
        borderColor:'#C0C0C0',
        margin:8,
        textAlignVertical:'top'
    },

    buttonlienhe:{
        width:100,
        height:40,
        backgroundColor:'red',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },

    buttoncontainer:{
        alignItems:'center',
        marginTop:20,
        marginBottom:20,
    },

    titel:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        color:'red',
        marginTop:20,
    }

})