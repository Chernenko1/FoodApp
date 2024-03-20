import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useContext, useEffect, useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { HomeParamList } from "../../screens/HomeStack"
import Icon from 'react-native-vector-icons/Ionicons'
import { InputText } from "../components/TextInput"
import { COLORS } from "../../themes/COLORS"
import { Button } from "../components/Button"
import { addProductToMeal } from "../../http/mealAPI"
import { useTheme } from "@react-navigation/native"
import { LineInfoCard } from "../components/Cards/LineInfoCard"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { getProduct } from "../../http/productAPI"
import { addToMeal, setMeals } from "../../store/slices/MealSlice"


type Navigation = NativeStackScreenProps<HomeParamList, 'ProductInfo'>

export const ProductInfo = ({navigation, route}: Navigation) => {
    
    const {_id} = useAppSelector(state => state.user.user)
    const {productData, backScreen, mealType} = route.params

    const [value, setValue] = useState('100')
    const [nutrients, setNutrients] = useState(productData.nutrients)

    const {date} = useAppSelector(state => state.app) 

    const {colors} = useTheme()

    const dispatch = useAppDispatch()

    const buttonPress = () => {
         addProductToMeal(
            {
                userId: _id,
                data: {productId: productData._id, quantity: value},
                type: mealType,
                date,
            }
        ).then(data => dispatch(setMeals(data))).catch(e => console.log(e))
        navigation.navigate(backScreen,{})
    }

    useEffect(() => {
        navigation.setOptions({headerTitle: productData.name})
    }, [])

    useEffect(() => {
        getProduct(productData._id, value)
        .then(data => setNutrients(data))
        .catch(e => console.log(e))
    }, [value])

    return (
        <View style={[styles.mainView, {backgroundColor: colors.background}]}>
            <View style={[styles.inputMainView, {backgroundColor: colors.card}]}>
                <View style={styles.inputView}>
                    <Icon name="scale-outline" size={35} style={styles.icon} color={COLORS.orange}/>
                    <InputText value={value} keyboardType='numeric' onChangeText={(text: string) => setValue(text)}/>
                </View>
                <View style={styles.inputView}>
                    <Icon name="list-outline" size={35} style={styles.icon} color={COLORS.orange}/>
                    <InputText value={'г'} editable={false}/>
                </View>
                <Button title="Сохранить" color={COLORS.deepOrange} textColor={COLORS.white} onPress={buttonPress}/>
            </View>
            <View style={[styles.infoView, {backgroundColor: colors.card}]}>
                   <LineInfoCard nameText="Калории" infoText={nutrients.calories + 'г'}/>
                   <LineInfoCard nameText="Белоки" infoText={nutrients.protein + 'г'}/>
                   <LineInfoCard nameText="Жиры" infoText={nutrients.fat + 'г'}/>
                   <LineInfoCard nameText="Углеводы" infoText={nutrients.carbohydrates + 'г'}/>
                   
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView:{
        paddingHorizontal: 10,
    },
    inputMainView: {
        paddingVertical: 20,
        paddingHorizontal: 15,
        marginVertical: 10,
        rowGap: 20,
        borderRadius: 10,
        elevation: 2,
    },
    inputView: {
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderWidth: 0.5,
        borderRadius: 5,
        columnGap: 10,
    },
    icon: {

    },
    infoView: {
        paddingVertical: 10,
        borderRadius: 10,
        rowGap: 10,
        elevation: 2
    },
    infoText: {
        fontSize: 20,
        color: COLORS.orange,
    }
})