import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import {Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HomeParamList } from "../../../screens/HomeStack";

// type NavProp = NativeStackScreenProps<HomeParamList, 'Search'>

export const SearchInput = () => {
    const navigation = useNavigation()
    return ( 
        <Pressable onPress={() => navigation.navigate('Search')}>
            <View style={styles.container}>
                <Text style={styles.input}>Search...</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container :{
        marginTop: 10,
        marginBottom: 10,
    },
    input: {
        borderColor: 'lightgray',
        borderWidth: 1,
        paddingVertical: 8,
        paddingHorizontal: 5,
        fontSize: 18,
        fontFamily: 'Rubik-Regular'
    }
})