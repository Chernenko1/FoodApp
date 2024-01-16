import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButton } from "../../components/HeaderButton";
import { COLORS } from "../../../themes/COLORS";

export const CreationHeader = () => {
    return (
 
            <View style={styles.container}>
                <Text style={styles.text}>Новый рецепт</Text>
                <HeaderButton  title="следующий шаг" disabled={true} onPress={() => {}}/>
            </View>
 
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: -5,
        paddingVertical: 10
    },
    text: {
        fontFamily: 'Rubik-Medium',
        fontSize: 20,
        color: COLORS.black
    }
})