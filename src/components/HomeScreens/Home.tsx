import React from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { HomeHeader } from "./HomeHeader";
import { SearchInput } from "./SearchInput";
import { FoodCategories } from "./FoodCategories";
import { PRHeader } from "./PopularFoodCategories/PRHeader";
import { PopularFC } from "./PopularFoodCategories/PopularFC";
import { TopDishes } from "./TopDishes/TopDishes";

export const Home = () => {
    return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{flex: 1, marginTop: 20, paddingBottom: 60}}>
            <View style ={{marginHorizontal: 20}}>
                <HomeHeader />
                <SearchInput />
            </View>

            <View >
                <FoodCategories />
            </View>

            <View style ={{marginHorizontal: 20}}>
                <PopularFC />
                <TopDishes />
            </View>
        </View>
    // </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    
})