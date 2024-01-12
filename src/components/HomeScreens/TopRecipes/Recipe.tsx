import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { HomeParamList } from "../../../screens/HomeStack";
import Icon from 'react-native-vector-icons/Ionicons'

import { COLORS } from "../../../themes/COLORS";

//------------Временное------------

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { addFavourite, removeFavourite } from "../../../store/slices/favouriteSlice";

//----------------------------------

type NavProps = NativeStackScreenProps<HomeParamList, 'Recipe'>

export const Recipe = ({route, navigation}:NavProps) => {
    const {recipe}: any = route.params as Recipe

    
    const dispatch = useAppDispatch()
    const isFavourite = useAppSelector(state => state.favourite.id).includes(recipe._id)

    const hadleLikeClick = () => {
        isFavourite ? dispatch(removeFavourite(recipe._id)) : dispatch(addFavourite(recipe._id))
    }

    //------Временный счетчик КБЖУ-------------
    const [PFC, setPFC] = useState({carb: 0, fat: 0, prot: 0})

    const a = recipe.products.map(item => item.productId)
    const products = useAppSelector(state => state.product.products).filter(item => a.includes(item['_id']) )

    const PFCCounter = () => {
        let prot = 0, fat = 0, carb = 0;

        for(let i = 0; i < products.length; i++){
           carb +=  products[i].carbohydrates * (recipe.products[i].quantity / 100)
           prot += products[i].protein * (recipe.products[i].quantity / 100)
           fat += products[i].fat * (recipe.products[i].quantity / 100)
        }
        setPFC({carb, prot, fat})
    }

    useEffect(() => {
        PFCCounter();
    }, [])
    //-----------------------------------------

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Icon name={isFavourite ? 'heart' : 'heart-outline'} size={22} color={COLORS.red} onPress={() => hadleLikeClick()}/>
            )
        })
    }, [hadleLikeClick])

    return (
        <View style = {styles.container}>
            <View style={{flex: 1}}>
                <Text style={styles.nameText}>{recipe.name}</Text>
                <View style={{marginVertical: 10}}>
                        <View style={styles.servesContainer}>
                            <View style={styles.serversInfo}>
                                <Icon name={'time-outline'} size={18} /> 
                                <Text style={styles.servesText}>{recipe.cookingTime}</Text>
                            </View>

                            <View style={styles.serversInfo}>
                                <Icon name="restaurant-outline" size={17}/>
                                <Text style={styles.servesText}>Serves {recipe.serves}</Text>
                            </View>
                        </View>
                </View>
                
                <View>
                    <Text style={styles.KPFCText}>Calories {recipe.kcal}kcal</Text>
                    <Text style={styles.KPFCText}>Carbohydrates {PFC.carb}g</Text>
                    <Text style={styles.KPFCText}>Protein {PFC.prot}g</Text>
                    <Text style={styles.KPFCText}>Fat {PFC.fat}g</Text>
                </View>
                <View style ={styles.imageContainer}>
                    <Image source={{uri: recipe.image}} style={styles.image}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    },
    servesContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '50%'
    },
    imageContainer: {
        position: 'absolute',
        right: 0,
        top: 30
    },
    image: {
        borderRadius: 10,
        width: 150,
        height: 150
    },
    serversInfo: {
        flexDirection: 'row', 
        alignItems: 'center', 
        columnGap: 5
    },
    nameText: {
        fontFamily: 'Rubik-Medium',
        fontSize: 30,
        color: COLORS.black,
        width: '60%'
    },
    servesText: {
        fontFamily: 'Rubik-Regular',
        fontSize: 16,
        top: 1,
        color: '#95A5A6'
    },
    KPFCText: {
        fontFamily: 'Rubik-Regular',
        fontSize: 16
    },
})