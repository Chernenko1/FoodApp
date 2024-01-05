import React from "react";
import { Text, View } from "react-native";
import { TDHeader } from "./TDHeader";
import { DishCard } from "./DishCard";

export const TopDishes = () => {
    return (
        <View style={{flex: 3}}>
           <TDHeader />
           <DishCard />
        </View>
    )
}