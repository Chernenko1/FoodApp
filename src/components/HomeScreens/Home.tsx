import React from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { HomeHeader } from "./HomeHeader";
import { SearchInput } from "./SearchInput";

export const Home = () => {
    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{flex: 1, marginTop: 20}}>
            <View style ={{     marginHorizontal: 20}}>
                <HomeHeader />
                <SearchInput />
            </View>
        </View>
    </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    
})