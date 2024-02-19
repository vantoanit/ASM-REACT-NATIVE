import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './src/asm/Login'
import Register from './src/asm/Register'
import Home from './src/asm/Home'
import Cart from './src/asm/Cart'
import List from './src/asm/List'
import Info from './src/asm/Info'
import Contact from './src/asm/Contact'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createBottomTabNavigator();



const App = () => {
  return (
   <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{title:"Trang chủ"}}/>
      <Tab.Screen name="Cart" component={Cart} options={{title:"Giỏ hàng"}}/>
      <Tab.Screen name="List" component={List} options={{title:"Danh sách yêu thích"}}/>
      <Tab.Screen name="Info" component={Info} options={{title:"Thông tin cá nhân"}}/>
    </Tab.Navigator>
   </NavigationContainer>
  );
}

export default App

const styles = StyleSheet.create({})