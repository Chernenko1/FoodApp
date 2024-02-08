import React from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { HomeHeader } from "./Header/HomeHeader";
import { SearchInput } from "./Header/SearchInput";
import { FoodCategories } from "./Header/FoodCategories";
import { PopularFC } from "./PopularFoodCategories/PopularFC";
import { TopRecipes } from "./TopRecipes/TopRecipes";
import { BasicEnergyInfo } from "./EnergyInfoComonents/BasicEnergyInfo";
import { MealList } from "./MealsComponents/MealList";
import { DatePicker } from "./DatePicker";

export const Home = () => {
    return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.mainView}>
 
                {/* <HomeHeader />
                <SearchInput />
                <FoodCategories />
                <PopularFC />
                <TopRecipes /> */}
                <BasicEnergyInfo />
                <DatePicker />
                <MealList />

        </View>
    // </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex:1,
    }
})