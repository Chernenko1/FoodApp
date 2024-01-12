import React from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../../themes/COLORS";

import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeParamList } from "../../../screens/HomeStack";

type NavProp = NativeStackScreenProps<HomeParamList, 'StackHome'>

export const TDHeader = () => {

    const navigation: any = useNavigation()

    return (
        <View style = {styles.container}>
            <Text style={styles.textLeft}>Top Recipes</Text>
            <TouchableOpacity activeOpacity={0.7} onPress={( ) => navigation.navigate('Recipes')}>
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