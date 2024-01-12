import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useAppSelector } from "../../store/hooks";
import { RecipeCard } from "../HomeScreens/TopRecipes/RecipeCard";
import { useNavigation } from "@react-navigation/native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeParamList } from "../../screens/HomeStack";

type NavProps = NativeStackScreenProps<HomeParamList, 'Recipe'>

export const Favourite = () => {
    const favId = useAppSelector(state => state.favourite.id)
    const recipes = useAppSelector(state => state.recipes.recipes).filter(item => favId.includes(item._id))

    const navigation: any = useNavigation()
    return (
        <View>
            <FlatList 
                data={recipes}
                keyExtractor={item => item._id}
                renderItem={({item}) =>
                    <TouchableOpacity activeOpacity={0.9} onPress={() => {navigation.navigate('Recipe', {recipe: item})}}>
                        <RecipeCard recipes={item}/>
                    </TouchableOpacity>}
            />
        </View>
    )
}