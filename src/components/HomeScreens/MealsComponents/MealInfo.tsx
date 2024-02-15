import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useEffect, useMemo, useState } from "react"
import { FlatList, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"
import { HomeParamList } from "../../../screens/HomeStack"
import { COLORS } from "../../../themes/COLORS"
import { Calories } from "../EnergyInfoComonents/Calories"
import { ProductCard } from "../../ProductComponent/ProductCard"
import { ButtonIcon } from "../../components/ButtonIcon"
import { deleteProducFromMeal, getMealData } from "../../../http/mealAPI"
import { MealInfoHeader } from "./MealInhoHeader"

type Navigation = NativeStackScreenProps<HomeParamList, 'MealInfo'>

interface IProduct {
    _id: string
    quantity: string
    productId: Product
}

export const MealInfo = ({navigation, route}: Navigation) => {
    const [products, setProducts] = useState<IProduct[]>([])

    const {headerTitle} = route.params

    
    const deleteProduct  = (productId: string) => {
        deleteProducFromMeal({
            mealId: '65ca22610be656a878bb704e',
            productId,
            type: 'breakfast'
        })
        getMealData("65ca22610be656a878bb704e", 'breakfast' ).then((data) => setProducts(data)).catch(e => console.log(e))
    }
    
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

    console.log('MealInfo')

    return (
        <SafeAreaView style={styles.mainView}>
                <FlatList 
                ListHeaderComponent={<MealInfoHeader />}
                data={products} 
                keyExtractor={item => item._id} 
                renderItem={({item}) => 
                    <View style = {styles.productView}>
                        <ProductCard
                            productName={item.productId.name} 
                            productQuantity={item.quantity} 
                            kcal={item.productId.nutrients.calories} 
                            productId={item._id} 
                            onPress={() => deleteProduct(item._id)}
                        />
                    </View>
                }
                />
                    <View style={styles.addIconView}>
                        <ButtonIcon name="add-outline" size={40} backgroundColor={COLORS.deepOrange} onPress={() => navigation.navigate('Search', {backScreen: route.name})}/>
                    </View> 
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1
    },
    productView: {
        marginTop: 10,
        paddingHorizontal: 15,
        marginBottom: 2
    },
    addIconView: {
        position: 'absolute',
        bottom: 60,
        right: 0,
    },
})