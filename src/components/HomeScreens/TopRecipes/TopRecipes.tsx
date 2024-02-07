import React from "react";
import { Text, View } from "react-native";
import { TDHeader } from "./TRHeader";
import { RecipeCard } from "./RecipeCard";

export const TopRecipes = () => {
    return (
        <View style={{flex: 3}}>
           <TDHeader />
           {/* <RecipeCard /> */}
        </View>
    )
}