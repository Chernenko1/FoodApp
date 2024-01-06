import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HomeParamList } from "../../../screens/HomeStack";
import Icon from 'react-native-vector-icons/Ionicons'

import { COLORS } from "../../../themes/COLORS";

type NavProps = NativeStackScreenProps<HomeParamList, 'Recipe'>

export const Recipe = ({route}:NavProps) => {
    const {recipe}: any = route.params as Recipe

    return (
        <View style = {styles.container}>
            <>
                <Text style={styles.nameText}>{recipe.name}</Text>
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
            </>
            
            <>

            </>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    servesContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '50%'
    },
    serversInfo: {
        flexDirection: 'row', 
        alignItems: 'center', 
        columnGap: 5
    },
    nameText: {
        fontFamily: 'Rubik-Medium',
        fontSize: 30,
        color: COLORS.black
    },
    servesText: {
        fontFamily: 'Rubik-Regular',
        fontSize: 16,
        top: 1
    }
})