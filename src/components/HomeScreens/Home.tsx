import React from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { HomeHeader } from "./HomeHeader";
import { SearchInput } from "./SearchInput";
import { FoodCategories } from "./FoodCategories";
import { PRHeader } from "./PopularFoodCategories/PRHeader";
import { PopularFC } from "./PopularFoodCategories/PopularFC";

export const Home = () => {
    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{flex: 1, marginTop: 20}}>
            <View style ={{marginHorizontal: 20}}>
                <HomeHeader />
                <SearchInput />
            </View>
                <FoodCategories />
            <View style ={{marginHorizontal: 20}}>
                <PopularFC />
            </View>
        </View>
    </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    
})