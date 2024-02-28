import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useEffect, useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { HomeParamList } from "../../screens/HomeStack"
import Icon from 'react-native-vector-icons/Ionicons'
import { InputText } from "../components/TextInput"
import { COLORS } from "../../themes/COLORS"
import { Button } from "../components/Button"
import { addProductToMeal } from "../../http/mealAPI"
import { AppText } from "../components/AppText"


type Navigation = NativeStackScreenProps<HomeParamList, 'ProductInfo'>

export const ProductInfo = ({navigation, route}: Navigation) => {

    const [value, setValue] = useState('100')

    const {productData,backScreen } = route.params

    const buttonPress = () => {
         addProductToMeal(
            {
                id: '65ca22610be656a878bb704e',
                data: {productId: productData._id, quantity: value},
                type: 'breakfast'
            }
        )
        navigation.navigate(backScreen,{})
    }

    useEffect(() => {
        navigation.setOptions({headerTitle: productData.name})
    }, [])

    return (
        <View style={styles.mainView}>
            <View style={styles.inputMainView}>
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
            <View style={styles.infoView}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <AppText style={styles.infoText}>{productData.nutrients.calories}г</AppText>
                    <AppText style={styles.infoText}>{productData.nutrients.carbohydrates}г</AppText>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <AppText style={styles.infoText}>{productData.nutrients.fat}г</AppText>
                    <AppText style={styles.infoText}>{productData.nutrients.protein}г</AppText>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView:{

    },
    inputMainView: {
        paddingVertical: 20,
        paddingHorizontal: 25,
        rowGap: 20
    },
    inputView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        columnGap: 10,
    },
    icon: {

    },
    infoView: {
    },
    infoText: {
        fontSize: 20,
        color: COLORS.orange,
    }
})