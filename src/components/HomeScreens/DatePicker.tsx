import { StyleSheet, Text, View } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import { COLORS } from "../../themes/COLORS"


export const DatePicker = () => {
    return (
        <View style={styles.mainView}>
            <View style={styles.contentView}>
                <Text style={styles.text}>Каледарь</Text>
                <Icon name="calendar-outline" color={COLORS.black} size={20}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        top: '6%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    contentView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 15,
        backgroundColor: COLORS.lightGray
    },
    text: {
        color: COLORS.black,
        fontFamily: 'Rubik-Regular',
        fontSize: 18,
        marginRight: 10
    }
})