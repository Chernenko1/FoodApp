import { StyleSheet } from "react-native";
import { COLORS } from "../../../../themes/COLORS";

export const styles = StyleSheet.create({
    mainView: {
        alignItems: 'center',
        paddingVertical: 10
    },
    inputView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 40,
        color: COLORS.black,
        fontFamily: 'Rubik-Regular'
    },
    input: {
        fontSize: 35,
    }
})