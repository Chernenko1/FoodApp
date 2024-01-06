import React from "react";
import { View, Text, FlatList } from "react-native";
import { useAppSelector } from "../../store/hooks";
import { RecipeCard } from "../HomeScreens/TopRecipes/RecipeCard";

export const Favourite = () => {
    const favId = useAppSelector(state => state.favourite.id)
    const recipes = useAppSelector(state => state.recipes.recipes).filter(item => favId.includes(item._id))

    return (
        <View>
            <FlatList 
                data={recipes}
                keyExtractor={item => item._id}
                renderItem={({item}) => <RecipeCard recipes={item}/>}
            />
        </View>
    )
}