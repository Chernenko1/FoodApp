import React from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { HomeHeader } from "./Header/HomeHeader";
import { SearchInput } from "./Header/SearchInput";
import { FoodCategories } from "./Header/FoodCategories";
import { PopularFC } from "./PopularFoodCategories/PopularFC";
import { TopRecipes } from "./TopRecipes/TopRecipes";

export const Home = () => {
    return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{flex: 12, marginTop: 20, paddingBottom: 60, paddingHorizontal: 20}}>
 
                <HomeHeader />
                <SearchInput />
                <FoodCategories />
                <PopularFC />
                <TopRecipes />

        </View>
    // </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    
})