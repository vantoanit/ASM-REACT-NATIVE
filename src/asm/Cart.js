import { Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
const Cart = () => {
  return (
    <SafeAreaView>
        <View style = {styles.container}>
        <View style={{ flexDirection:'row', padding:10}}>
            <View style = {styles.icons}>
            <Text><Icon name="th-large" size={25} color="#999"  /></Text>
            </View>
            <View style = {{marginLeft:130}}>
            <Text style = {{backgroundColor:'black', color:'white', fontWeight:'bold', fontSize:20}}>Cart</Text>
            </View>
            </View>
            <View style = {styles.cartmain}>
                <View style = {styles.items}>
                <Image source={require('../img/list3.jpg')} style = {{width:100, height:70, borderRadius:10}}/>
                <Text style = {{ textAlign:'center', color:'white', fontWeight:'600', marginLeft:10, fontSize:12}}>Đùi gà nướng</Text>
                <View style = {styles.numbercard}>
                <TouchableOpacity style = {{width:20 , height:30 , backgroundColor:'white',alignItems:'center', borderColor:'#C0C0C0', borderWidth:1}}><Text>-</Text></TouchableOpacity>
                <TextInput style = {{borderWidth:1, width:40 , height:30, fontSize:10, textAlign:'center', borderColor:'#C0C0C0'}} keyboardType='numeric' value='1'/>
                <TouchableOpacity style = {{width:20 , height:30 , backgroundColor:'white', alignItems:'center', borderColor:'#C0C0C0', borderWidth:1}}><Text>+</Text></TouchableOpacity>
                <Text style = {{fontSize:10, textAlign:'center', alignSelf:'center', marginLeft:10, color:'white', fontWeight:'bold'}}>50.000đ</Text>
                </View>
                
                </View>
                
                
            </View>

            <View style = {styles.cartmain}>
                <View style = {styles.items}>
                <Image source={require('../img/list3.jpg')} style = {{width:100, height:70, borderRadius:10}}/>
                <Text style = {{ textAlign:'center', color:'white', fontWeight:'bold', marginLeft:10, fontSize:12}}>Đùi gà nướng</Text>
                <View style = {styles.numbercard}>
                <TouchableOpacity style = {{width:20 , height:30 , backgroundColor:'white',alignItems:'center', borderColor:'#C0C0C0', borderWidth:1}}><Text>-</Text></TouchableOpacity>
                <TextInput style = {{borderWidth:1, width:40 , height:30, fontSize:10, textAlign:'center', borderColor:'#C0C0C0'}} keyboardType='numeric' value='1'/>
                <TouchableOpacity style = {{width:20 , height:30 , backgroundColor:'white', alignItems:'center', borderColor:'#C0C0C0', borderWidth:1}}><Text>+</Text></TouchableOpacity>
                <Text style = {{fontSize:10, textAlign:'center', alignSelf:'center', marginLeft:10, color:'white', fontWeight:'bold'}}>50.000đ</Text>
                </View>
                
                </View>
                
                
            </View>

            <View style = {styles.cartmain}>
                <View style = {styles.items}>
                <Image source={require('../img/list2.jpg')} style = {{width:100, height:70, borderRadius:10}}/>
                <Text style = {{ textAlign:'center', color:'white', fontWeight:'bold', marginLeft:10, fontSize:12}}>Đùi gà nướng</Text>
                <View style = {styles.numbercard}>
                <TouchableOpacity style = {{width:20 , height:30 , backgroundColor:'white',alignItems:'center', borderColor:'#C0C0C0', borderWidth:1}}><Text>-</Text></TouchableOpacity>
                <TextInput style = {{borderWidth:1, width:40 , height:30, fontSize:10, textAlign:'center', borderColor:'#C0C0C0'}} keyboardType='numeric' value='1'/>
                <TouchableOpacity style = {{width:20 , height:30 , backgroundColor:'white', alignItems:'center', borderColor:'#C0C0C0', borderWidth:1}}><Text>+</Text></TouchableOpacity>
                <Text style = {{fontSize:10, textAlign:'center', alignSelf:'center', marginLeft:10, color:'white', fontWeight:'bold'}}>50.000đ</Text>
                </View>
                
                </View>
                
                
            </View>

            <View style = {styles.cartmain}>
                <View style = {styles.items}>
                <Image source={require('../img/list3.jpg')} style = {{width:100, height:70, borderRadius:10}}/>
                <Text style = {{ textAlign:'center', color:'white', fontWeight:'bold', marginLeft:10, fontSize:12}}>Đùi gà nướng</Text>
                <View style = {styles.numbercard}>
                <TouchableOpacity style = {{width:20 , height:30 , backgroundColor:'white',alignItems:'center', borderColor:'#C0C0C0', borderWidth:1}}><Text>-</Text></TouchableOpacity>
                <TextInput style = {{borderWidth:1, width:40 , height:30, fontSize:10, textAlign:'center', borderColor:'#C0C0C0'}} keyboardType='numeric' value='1'/>
                <TouchableOpacity style = {{width:20 , height:30 , backgroundColor:'white', alignItems:'center', borderColor:'#C0C0C0', borderWidth:1}}><Text>+</Text></TouchableOpacity>
                <Text style = {{fontSize:10, textAlign:'center', alignSelf:'center', marginLeft:10, color:'white', fontWeight:'bold'}}>50.000đ</Text>
                </View>
                
                </View>
                
                
            </View >
                
            <View style = {styles.pay}>
                <Text style = {{marginLeft:20, color:'white', fontWeight:'bold'}}>Tổng thanh toán: 200.00đ</Text>
                <Pressable style = {styles.buttonPay}>
                    <Text style = {{color:'white', fontWeight:'bold'}}>Thanh toán</Text>
                </Pressable>

            </View>
        </View>
    </SafeAreaView>
  )
}

export default Cart

const styles = StyleSheet.create({
    container:{
        height:'100%',
        backgroundColor:'black'
    },
    cartmain:{
        marginHorizontal:20,
        borderRadius:10,
        padding:5,
        borderWidth:0.5,
        marginTop:20,
        backgroundColor:'#333333'
    },
    items:{
        width:'60%',
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
       
        
    },

    numbercard:{
        flexDirection:'row',
        marginLeft:40,
        justifyContent:'center'
    },

    pay:{
        backgroundColor:'black',
        width:'100%',
        height:'10%',
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderColor:'#C0C0C0',
        borderRadius:1,
    },

    buttonPay:{
        width:150,
        height:50,
        backgroundColor:'red',
        alignItems:'center',
        textAlign:'center',
        justifyContent:'center',
        marginRight:20,
        borderRadius:20,
    },

    icons:{
        width:35,
        height:35,
        borderColor:'#C0C0C0',
        borderRadius:10,
        borderWidth:1,
        justifyContent: 'center', 
        alignItems: 'center',
    }

})