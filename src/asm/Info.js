import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';


const Info = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection:'row', padding:10}}>
            <View style = {styles.icons}>
            <Text><Icon name="th-large" size={25} color="#999"  /></Text>
            </View>
            <View style = {{marginLeft:100}}>
            <Text style = {{backgroundColor:'black', color:'white', fontWeight:'bold', fontSize:20}}>Information</Text>
            </View>
            </View>
            
            <View style={styles.avata}>
                <Image source={require('../img/anh2.png')} style={{ width: 120, height: 120, marginBottom: 30 }} />
            </View>

            <View style={styles.from}>
               
                <Pressable style={styles.lienhe}>
                <View style = {{justifyContent:'center', alignItems:'center',marginLeft:5}}>
               <Text><Icon name="phone" size={25} color="red"  /></Text>
                </View>
                    <Text style={{ color: 'white', padding: 9 , fontWeight:'bold'}}>Liên Hệ</Text>
                </Pressable>
            </View>

            <View style={styles.from}>
                <Pressable style={styles.lienhe}>
                <View style = {{justifyContent:'center', alignItems:'center',marginLeft:5}}>
               <Text><Icon name="map" size={22} color="red"  /></Text>
                </View>
                    <Text style={{ color: 'white', padding: 9 , fontWeight:'bold'}}>Địa chỉ</Text>
                </Pressable>
            </View>

            <View style={styles.from}>
                <Pressable style={styles.lienhe}>
                <View style = {{justifyContent:'center', alignItems:'center',marginLeft:5}}>
               <Text><Icon name="user" size={22} color="red"  /></Text>
                </View>
                    <Text style={{ color: 'white', padding: 9 , fontWeight:'bold'}}>Thông tin</Text>
                </Pressable>
            </View>

            <View style={styles.from}>
                <Pressable style={styles.lienhe}>
                <View style = {{justifyContent:'center', alignItems:'center',marginLeft:5}}>
               <Text><Icon name="sign-out" size={22} color="red"  /></Text>
                </View>
                    <Text style={{ color: 'white', padding: 9, fontWeight:'bold' }}>Đăng xuất</Text>
                </Pressable>
            </View>

        </SafeAreaView>
    )
}

export default Info

const styles = StyleSheet.create({
    container: {
        backgroundColor:'black',
        height:'100%'
    },
    avata: {
        alignItems: 'center',
        marginTop: 20
    },

    from: {
        marginHorizontal: 30,
        marginTop: 15,
    },

    lienhe: {
        width: '100%',
        height: 40,
        backgroundColor: 'black',
        borderRadius: 10,
        flexDirection:'row',
        borderWidth:1,
        borderColor:'white'
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