import { StyleSheet, Text, View } from "react-native"
import { COLORS } from "../../themes/COLORS"
import Icon from "react-native-vector-icons/Ionicons"

interface Props {
    productName: string,
    kcal: number,
    productQuantity: string
}

export const Product = ({productName, productQuantity, kcal}: Props) => {
    return (
        <View style={styles.mainView}>
            <View>
                <Text style={styles.productNameText}>{productName}</Text>
                <Text style={styles.productInfoText}>{productQuantity} г</Text>
                <Text style={styles.productInfoText}>{kcal} ккал</Text>
            </View>
            <View style={styles.iconView}>
                <Icon name='close-outline' size={30} color={COLORS.black}/>
            </View>
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
    iconView: {
        backgroundColor: COLORS.lightGray,
        padding: 5,
        borderRadius: 10
    },
})