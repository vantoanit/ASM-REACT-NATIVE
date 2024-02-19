import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
const List = () => {
    return (
        <SafeAreaView style={styles.maincontainer}>
            <ScrollView>


                <View style={styles.container}>
                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <View style={styles.iconss}>
                            <Text><Icon name="th-large" size={25} color="#999" /></Text>
                        </View>
                        <View style={{ marginLeft: 100 }}>
                            <Text style={{ backgroundColor: 'black', color: 'white', fontWeight: 'bold', fontSize: 20 }}>Favourite</Text>
                        </View>
                    </View>
                    <View style={styles.listMain}>
                        <View >
                            <View style={styles.favorties}>
                                <Image source={require('../img/favorite.png')} style={{ width: 50, height: 50 }} />
                            </View>
                            <Image source={require('../img/list2.jpg')} style={{ width: '100%', height: 300 }} />
                            <Text style={{ marginTop: 10, marginLeft: 10, fontWeight: 'bold', color: 'white' }}>Salad trộn thịt</Text>

                            <View style={styles.listImg}>
                                <View style={styles.icons}>
                                    <Text><Icon name="star" size={20} color="yellow" /></Text>
                                </View>
                                <Text style={{ marginLeft: 5, color: 'white', fontWeight: 'bold' }}>5.0</Text>
                            </View>

                            <Text style={{ marginHorizontal: 10, paddingBottom: 10, color: 'white' }}>Salad Trộn Thịt là một món ăn tráng miệng ngon miệng, bổ dưỡng và phù hợp cho những người đang duy trì chế độ ăn lành mạnh. Món salad này kết hợp giữa thịt chín, rau xanh tươi mát, rau sống và các thành phần khác
                                để tạo nên một bữa ăn cân đối với hương vị hấp dẫn và sự đa dạng dinh dưỡng.</Text>
                        </View>
                    </View>


                </View>

                <View style={styles.container}>
                    <View style={styles.listMain}>
                        <View >
                            <View style={styles.favorties}>
                                <Image source={require('../img/favorite.png')} style={{ width: 50, height: 50 }} />
                            </View>
                            <Image source={require('../img/list3.jpg')} style={{ width: '100%', height: 300 }} />
                            <Text style={{ marginTop: 10, marginLeft: 10, fontWeight: 'bold', color: 'white' }}>Salad trộn thịt</Text>

                            <View style={styles.listImg}>
                                <View style={styles.icons}>
                                    <Text><Icon name="star" size={20} color="yellow" /></Text>
                                </View>
                                <Text style={{ marginLeft: 5, color: 'white', fontWeight: 'bold' }}>5.0</Text>
                            </View>

                            <Text style={{ marginHorizontal: 10, paddingBottom: 10, color: 'white' }}>Salad Trộn Thịt là một món ăn tráng miệng ngon miệng, bổ dưỡng và phù hợp cho những người đang duy trì chế độ ăn lành mạnh. Món salad này kết hợp giữa thịt chín, rau xanh tươi mát, rau sống và các thành phần khác
                                để tạo nên một bữa ăn cân đối với hương vị hấp dẫn và sự đa dạng dinh dưỡng.</Text>
                        </View>
                    </View>


                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default List

const styles = StyleSheet.create({
    maincontainer: {
        backgroundColor: 'black'
    },
    container: {
        marginHorizontal: 20,
        marginVertical: 20,
    },

    listMain: {
        borderWidth: 1,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#333333'
    },
    listImg: {
        marginTop: 5,
        marginLeft: 10,
        flexDirection: 'row'
    },

    favorties: {
        position: 'absolute',
        top: 10,
        zIndex: 1000,
        right: 10,
    },

    iconss:{
        width:35,
        height:35,
        borderColor:'#C0C0C0',
        borderRadius:10,
        borderWidth:1,
        justifyContent: 'center', 
        alignItems: 'center',
    }


})