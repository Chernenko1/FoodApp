import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useEffect, useMemo, useState } from "react"
import { FlatList, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"
import { HomeParamList } from "../../../screens/HomeStack"
import { COLORS } from "../../../themes/COLORS"
import { ProductCard } from "../../ProductComponent/ProductCard"
import { ButtonIcon } from "../../components/ButtonIcon"
import { deleteProducFromMeal, getMealData } from "../../../http/mealAPI"
import { MealInfoHeader } from "./MealInhoHeader"
import { useTheme } from "@react-navigation/native"
import { useAppSelector } from "../../../store/hooks"

type Navigation = NativeStackScreenProps<HomeParamList, 'MealInfo'>

interface IProduct {
    _id: string,
    quantity: string,
    product: Product
}

export const MealInfo = ({navigation, route}: Navigation) => {   
    const {headerTitle,type} = route.params
    
    const [products, setProducts] = useState<IProduct[]>()
    
    const {_id} = useAppSelector(state => state.meals.meals)

    const {colors} = useTheme()
    
    useEffect(() => {
        navigation.setOptions({
            title: headerTitle, 
            headerStyle:{ backgroundColor: COLORS.deepOrange},
            headerTintColor: COLORS.white,
            headerTitleAlign: 'center',
        })
    }, [])

    useEffect(() => {
        navigation.addListener('focus', () => getMealData(_id, type).then((data) => setProducts(data)).catch(e => console.log(e)))
    }, [])

    console.log(1,type)

    return (
        <SafeAreaView style={[styles.mainView, {backgroundColor: colors.background}]}>
             <FlatList 
                ListHeaderComponent={<MealInfoHeader />}
                data={products} 
                keyExtractor={(item, ind) => item._id + `${ind}`} 
                renderItem={({item}) => 
                    <View style = {styles.productView}>
                        <ProductCard
                            productName={item.product.name} 
                            productQuantity={item.quantity} 
                            kcal={item.product.nutrients.calories} 
                            productId={item.product._id} 
                            onIconPress={() => {}}
                            onCardPress={() => {navigation.navigate("ProductInfo",{ backScreen: route.name, mealType: type,func: 'update', productData: {...item.product, quantity: item.quantity, cardId: item._id} as Product})}}
                        />
                    </View>
                }
                />
                    <View style={styles.addIconView}>
                        <ButtonIcon 
                            name="add-outline" 
                            size={40} 
                            backgroundColor={COLORS.deepOrange} 
                            onPress={() => navigation.navigate('Search', {backScreen: route.name, screenParams: {mealType: type} })}/>
                    </View> 
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
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