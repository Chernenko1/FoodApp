import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'

import { COLORS } from "../../../themes/COLORS";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { addFavourite, removeFavourite } from "../../../store/slices/favouriteSlice";

interface Props {
    recipes: Recipe
}

export const RecipeCard = ({recipes}: Props) => {

    const {width, height} = useWindowDimensions();

    const dispatch = useAppDispatch()
    const isFavourite = useAppSelector(state => state.favourite.id).includes(recipes._id)

    const hadleLikeClick = () => {
        isFavourite ? dispatch(removeFavourite(recipes._id)) : dispatch(addFavourite(recipes._id))
    }

    return (
        <View style ={[styles.container]}>
            <View>
                <Image style={{width: width * 0.3, height: height *0.1, borderRadius: 20}} source={{uri: recipes.image}}/>
            </View>
            <View style={[styles.titleCont, {width: '50%'}]} >
                <Text style={styles.titleText}>
                    {recipes.name}
                </Text>

                <View style = {styles.infoCont}>
                    <View>
                        <Icon name={'time-outline'} size={16}> 
                            <Text>{recipes.cookingTime}</Text>
                        </Icon>
                        <Icon name={'star'} size={16} color={COLORS.yellow} style={{marginTop: 10}}> 
                            <Text>{recipes.rating}</Text>
                        </Icon>
                    </View>
                    <View>
                        <Icon name={'restaurant-outline'} size={16}> 
                            <Text>Serves {recipes.serves}</Text>
                        </Icon>
                        <Icon name={'flame'} size={16} color={COLORS.red} style={{marginTop: 10}}> 
                            <Text>{recipes.kcal} kcal</Text>
                        </Icon>
                    </View>
                </View>
            </View>
                <Icon name={isFavourite ?'heart':'heart-outline'} size={20} color={COLORS.red} onPress={() => dispatch(hadleLikeClick)}/>
        </View>
    )
}

const styles = StyleSheet.create( {
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        padding: 15,
        backgroundColor: COLORS.white,
        borderRadius: 15,
        elevation: 1
    },
    titleCont: {
        marginLeft: 10
    },
    infoCont: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    titleText: {
        fontFamily: "Rubik-Medium",
        fontSize: 18,
        color: COLORS.black,
    }
})