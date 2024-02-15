import { StyleSheet, Text, View } from "react-native"
import { COLORS } from "../../themes/COLORS"
import Icon from "react-native-vector-icons/Ionicons"
import { ButtonIcon } from "../components/ButtonIcon"
import { deleteProducFromMeal } from "../../http/mealAPI"
import { memo, useCallback, useEffect } from "react"

interface Props {
    productName: string,
    kcal: number,
    productQuantity: string,
    productId: string
    onPress: () => void
}


export const ProductCard = ({productName, productQuantity, kcal, productId, onPress}: Props) => {
    console.log(5)
    return (
        <View style={styles.mainView}>
            <View>
                <Text style={styles.productNameText}>{productName}</Text>
                <Text style={styles.productInfoText}>{productQuantity} г</Text>
                <Text style={styles.productInfoText}>{kcal} ккал</Text>
            </View>
            <ButtonIcon name='close-outline' size={30} backgroundColor={COLORS.lightGray} onPress={onPress}/>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 15,
        backgroundColor: COLORS.white,
        elevation: 3
    },
    productNameText: {
        fontSize: 18,
        color: COLORS.black, 
        fontFamily: 'Rubik-Medium'
    },
    productInfoText: {
        fontFamily: 'Rubik-Regular',
        fontSize: 15
    },
})