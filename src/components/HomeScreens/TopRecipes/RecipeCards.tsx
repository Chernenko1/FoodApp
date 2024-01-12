import React from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native'
import { useAppSelector } from '../../../store/hooks'
import { RecipeCard } from './RecipeCard'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { HomeParamList } from '../../../screens/HomeStack'

type NavProps = NativeStackScreenProps<HomeParamList, 'Recipes'>

export const RecipeCards = ({navigation}:NavProps) => {
    const recipes = useAppSelector(state => state.recipes.recipes)

    return (
        <View>
            <FlatList 
                data={recipes} 
                keyExtractor={item => item["_id"]}
                renderItem={({item}) => 
                    <TouchableOpacity activeOpacity={0.9} onPress={() => {navigation.navigate('Recipe', {recipe: item})}}>
                        <RecipeCard recipes={item}/>
                    </TouchableOpacity>}
                />
        </View>
    )
}