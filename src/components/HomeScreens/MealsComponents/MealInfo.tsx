import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useEffect, useState } from "react"
import { FlatList, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"
import { HomeParamList } from "../../../screens/HomeStack"
import { COLORS } from "../../../themes/COLORS"
import { Calories } from "../EnergyInfoComonents/Calories"
import { Product } from "../../ProductComponent/ProductCard"
import { ButtonIcon } from "../../components/ButtonIcon"
import { getMealData } from "../../../http/mealAPI"

type Navigation = NativeStackScreenProps<HomeParamList, 'MealInfo'>

export const MealInfo = ({navigation, route}: Navigation) => {
    const [products, setProducts] = useState([])

    const {headerTitle} = route.params

    useEffect(() => {
        navigation.setOptions({
            title: headerTitle, 
            headerStyle:{ backgroundColor: COLORS.deepOrange},
            headerTintColor: COLORS.white,
            headerTitleAlign: 'center',
        })
    }, [])

    useEffect(() => {
        navigation.addListener('focus', () => getMealData("65ca22610be656a878bb704e", 'breakfast' ).then((data) => setProducts(data)).catch(e => console.log(e)))
    }, [])

    return (
        <SafeAreaView style={styles.mainView}>
            <ScrollView>
                <View style={styles.headerView}>
                    <View style={styles.progressView}>
                            <View style={{width: 110, height: 110, borderRadius: 55, backgroundColor: COLORS.white, justifyContent: 'center'}}>
                                <Calories type="Осталось" count={2440}/>
                            </View>
                    </View>
                    <View style={styles.dateView}>
                        <Text style={styles.dateText}>08 месяц 2024</Text>
                    </View>
                </View>
                <View style={styles.productView}>
                 {
                    products.map(item => <Product key={item._id} productName={item.productId.name} productQuantity={item.quantity} kcal={item.productId.calories} /> )
                 }
                </View>
            </ScrollView>
                    <View style={styles.addIconView}>
                        <ButtonIcon name="add-outline" size={40} backgroundColor={COLORS.deepOrange} onPress={() => navigation.navigate('Search', {backScreen: route.name})}/>
                    </View> 
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    progressView: {
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: COLORS.orange,
        width: 140,
        height: 140,
        borderRadius: 70,
    },
    mainView: {
        flex: 1
    },
    headerView: {
        alignItems: 'center',
        paddingBottom: 20,
        backgroundColor: COLORS.deepOrange
    },
    dateView: {
        top: 15,
    },
    productView: {
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 25,
        rowGap: 10
    },
    addIconView: {
        position: 'absolute',
        bottom: 60,
        right: 0,
    },
    dateText: {
        fontFamily: 'Rubik-Regular',
        fontSize: 20,
        color: COLORS.white
    },
})