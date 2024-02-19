import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {

    const dataFake = [
        { id: 1, name: "Dui ga nuong", image: "require('../img/list4.jpg')", price: "50.000", cart: "require('../img/basket.png')" },
        { id: 1, name: "Dui ga nuong", image: "require('../img/list4.jpg')", price: "50.000", cart: "require('../img/basket.png')" },
        { id: 1, name: "Dui ga nuong", image: "require('../img/list4.jpg')", price: "50.000", cart: "require('../img/basket.png')" },
        { id: 1, name: "Dui ga nuong", image: "require('../img/list4.jpg')", price: "50.000", cart: "require('../img/basket.png')" },
    ]
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.head}>
                    <View style={styles.icons}>
                        <Text><Icon name="th-large" size={25} color="#999" /></Text>
                    </View>
                    <Image style={{ width: 50, height: 50 }} source={require('../img/anh2.png')} />
                </View>

                <View>
                    <TextInput placeholder='Search' clearButtonMode='always' style={styles.search} />
                </View>

                <View style={styles.headtitel}>
                    <Text style={{ fontSize: 12, color: 'white', fontWeight:'bold' }}>Danh Mục</Text>
                    <Text style={{ fontSize: 12, color: 'white' , fontWeight:'bold'}}>Xem Thêm</Text>
                </View>
                <ScrollView horizontal>
                    <View style={styles.sublist}>

                        <View style={styles.itemss}>
                            <Image source={require('../img/list2.jpg')} style={{ width: 90, height: 90, borderRadius: 5 }} />
                            <View>
                                <Text style={{ fontSize: 11, textAlign: 'center', color:'white', marginTop:2, fontWeight:'bold' }}>Đồ chay</Text>
                            </View>

                        </View>
                        <View style={styles.itemss}><Image source={require('../img/list1.jpg')} style={{ width: 90, height: 90, borderRadius: 5 }} />
                            <View>
                            <Text style={{ fontSize: 11, textAlign: 'center', color:'white', marginTop:2, fontWeight:'bold' }}>Đồ ăn nhanh</Text>
                            </View>
                        </View>
                        <View style={styles.itemss}><Image source={require('../img/list3.jpg')} style={{ width: 90, height: 90, borderRadius: 5 }} />
                            <View>
                            <Text style={{ fontSize: 11, textAlign: 'center', color:'white', marginTop:2, fontWeight:'bold' }}>Đồ nướng</Text>
                            </View>
                        </View>
                        <View style={styles.itemss}><Image source={require('../img/list2.jpg')} style={{ width: 90, height: 90, borderRadius: 5 }} />
                            <View>
                            <Text style={{ fontSize: 11, textAlign: 'center', color:'white', marginTop:2, fontWeight:'bold' }}>Đồ chay</Text>
                            </View>
                        </View>

                        <View style={styles.itemss}><Image source={require('../img/list2.jpg')} style={{ width: 90, height: 90, borderRadius: 5 }} />
                            <View>
                            <Text style={{ fontSize: 11, textAlign: 'center', color:'white', marginTop:2, fontWeight:'bold' }}>Đồ chay</Text>
                            </View>
                        </View>

                    </View>
                </ScrollView>


                <View style={styles.headtitel}>
                    <Text style={{ fontSize: 12, color: 'white', fontWeight:'bold' }}>Sản phẩm bán chạy</Text>
                    <Text style={{ fontSize: 12, color: 'white', fontWeight:'bold' }}>Xem Thêm</Text>
                </View>

                <ScrollView horizontal>
                    <View style={styles.main}>
                        <View style={styles.items} >
                            <Image source={require('../img/list3.jpg')} style={{ width: 130, height: 130, borderRadius: 10 }} />
                            <View>
                                <Text style={{ textAlign: 'center', color: 'white', marginTop: 5, fontWeight:'bold' }}>Đùi gà nướng</Text>
                                <View style={styles.mainfood}>
                                    <Text style = {{color:'white', fontWeight:'bold'}}>50.000đ</Text>
                                    <Image source={require('../img/basket.png')} style={{ width: 23, height: 20 }} />
                                </View>
                            </View>
                        </View>
                        <View style={styles.items} >
                            <Image source={require('../img/list2.jpg')} style={{ width: 130, height: 130, borderRadius: 10 }} />
                            <View>
                                <Text style={{ textAlign: 'center',  color: 'white', marginTop: 5, fontWeight:'bold' }}>Đùi gà nướng</Text>
                                <View style={styles.mainfood}>
                                    <Text style = {{color:'white', fontWeight:'bold'}}>50.000đ</Text>
                                    <Image source={require('../img/basket.png')} style={{ width: 23, height: 20 }} />
                                </View>
                            </View>
                        </View>

                        <View style={styles.items} >
                            <Image source={require('../img/list4.jpg')} style={{ width: 130, height: 130, borderRadius: 10 }} />
                            <View>
                                <Text style={{ textAlign: 'center',  color: 'white', marginTop: 5, fontWeight:'bold' }}>Đùi gà nướng</Text>
                                <View style={styles.mainfood}>
                                    <Text style = {{color:'white', fontWeight:'bold'}}>50.000đ</Text>
                                    <Image source={require('../img/basket.png')} style={{ width: 23, height: 20 }} />
                                </View>
                            </View>
                        </View>

                        <View style={styles.items} >
                            <Image source={require('../img/list3.jpg')} style={{ width: 130, height: 130, borderRadius: 10 }} />
                            <View>
                                <Text style={{ textAlign: 'center',  color: 'white', marginTop: 5, fontWeight:'bold'}}>Đùi gà nướng</Text>
                                <View style={styles.mainfood}>
                                    <Text style = {{color:'white', fontWeight:'bold'}}>50.000đ</Text>
                                    <Image source={require('../img/basket.png')} style={{ width: 23, height: 20 }} />
                                </View>
                            </View>
                        </View>
                    </View>

                </ScrollView>


                <View style={styles.headtitel}>
                    <Text style={{ fontSize: 12, color: 'white' , fontWeight:'bold'}}>Gợi ý hôm nay</Text>
                    <Text style={{ fontSize: 12, color: 'white' , fontWeight:'bold'}}>Xem Thêm</Text>
                </View>


                <View style={styles.main}>
                    <View style={styles.items} ><Image source={require('../img/list4.jpg')} style={{ width: '100%', height: 130, borderRadius: 10 }} />
                        <View>
                            <Text style={{ textAlign: 'center', color: 'white', marginTop: 5, fontWeight:'bold' }}>Đùi gà nướng</Text>
                            <View style={styles.mainfood}>
                                <Text style = {{color:'white', fontWeight:'bold'}}>50.000đ</Text>
                                <Image source={require('../img/basket.png')} style={{ width: 23, height: 20 }} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.items} ><Image source={require('../img/list4.jpg')} style={{ width: '100%', height: 130, borderRadius: 10 }} />
                        <View>
                            <Text style={{ textAlign: 'center', color: 'white', marginTop: 5, fontWeight:'bold'}}>Đùi gà nướng</Text>
                            <View style={styles.mainfood}>
                                <Text style = {{color:'white', fontWeight:'bold'}}>50.000đ</Text>
                                <Image source={require('../img/basket.png')} style={{ width: 23, height: 20 }} />
                            </View>
                        </View>
                    </View>
                </View>




                <View style={styles.main}>
                    <View style={styles.items} ><Image source={require('../img/list4.jpg')} style={{ width: '100%', height: 130, borderRadius: 10 }} />
                        <View>
                            <Text style={{ textAlign: 'center', color: 'white', marginTop: 5, fontWeight:'bold' }}>Đùi gà nướng</Text>
                            <View style={styles.mainfood}>
                                <Text style = {{color:'white', fontWeight:'bold'}}>50.000đ</Text>
                                <Image source={require('../img/basket.png')} style={{ width: 23, height: 20 }} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.items} ><Image source={require('../img/list4.jpg')} style={{ width: '100%', height: 130, borderRadius: 10 }} />
                        <View>
                            <Text style={{ textAlign: 'center', color: 'white', marginTop: 5, fontWeight:'bold'}}>Đùi gà nướng</Text>
                            <View style={styles.mainfood}>
                                <Text style = {{color:'white', fontWeight:'bold'}}>50.000đ</Text>
                                <Image source={require('../img/basket.png')} style={{ width: 23, height: 20 }} />
                            </View>
                        </View>
                    </View>
                </View>





                {/* <FlatList data={[dataFake]} renderItem={({ item }) =>
                    <View style={styles.main}>
                        <View style={styles.items} >
                            <Image source={require('../img/list4.jpg')} style={{ width: '100%', height: 130, borderRadius: 10 }} />
                            <View>
                                <Text style={{ textAlign: 'center', color: 'white', marginTop: 5, fontWeight:'bold' }}>{item.name}</Text>
                                <View style={styles.mainfood}>
                                    <Text style = {{color:'white', fontWeight:'bold'}}>{item.price}</Text>
                                    <Image source={require('../img/basket.png')} style={{ width: 23, height: 20 }} />
                                </View>
                            </View>
                        </View>
                    </View>
                } /> */}

            </ScrollView>





        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'black',
        height: '100%',
        padding: 20,


    },
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
    },
    titel: {
        color: 'red',
        fontWeight: '600',
        textTransform: 'uppercase',
        fontSize: 15,
    },
    sublist: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemss: {
        width: 100,
        borderWidth: 0.5,
        borderRadius: 5,
        overflow: 'hidden',
        marginTop: 7,
        padding: 5,
        marginRight: 10,
        backgroundColor:'#333333'
    },

    headtitel: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },

    items: {
        width: 150,
        borderWidth: 0.5,
        borderRadius: 10,
        padding: 10,
        marginRight: 20,
        backgroundColor:'#333333'

    },
    main: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,

    },

    mainfood: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    search: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 15,
        backgroundColor:'#808080'
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