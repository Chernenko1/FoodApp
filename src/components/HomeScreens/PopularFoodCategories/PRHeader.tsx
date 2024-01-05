import React from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../../themes/COLORS";

export const PRHeader = () => {
    return (
        <View style = {styles.container}>
            <Text style={styles.textLeft}>Popular Food Categories</Text>
            <TouchableOpacity activeOpacity={0.7}>
                <Text style={styles.textRight}>See all</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },
    textLeft: {
        fontSize: 20, 
        fontFamily: 'Rubik-Medium',
        color: 'black'
    },
    textRight: {
        fontSize: 17,
        fontFamily: 'Rubik-Regular',
        color: COLORS.orange
    }     
})