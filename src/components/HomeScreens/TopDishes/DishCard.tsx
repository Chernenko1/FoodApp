import React from "react";
import { Image, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'

import { COLORS } from "../../../themes/COLORS";

export const DishCard = () => {

    const {width, height} = useWindowDimensions()

    return (
        <View style ={[styles.container]}>
            <View>
                <Image style={{width: width * 0.3, height: height *0.1, borderRadius: 20}} source={{uri: 'https://bgr.com/wp-content/uploads/2022/02/chicken-salad.jpg?quality=82&strip=all'}}/>
            </View>
            <View style={[styles.titleCont, {width: '50%'}]} >
                <Text style={styles.titleText}>
                    Healthy Salad
                </Text>

                <View style = {styles.infoCont}>
                    <View>
                        <Icon name={'time-outline'} size={16}> 
                            <Text>15 min</Text>
                        </Icon>
                        <Icon name={'star'} size={16} color={COLORS.yellow} style={{marginTop: 10}}> 
                            <Text>4.8</Text>
                        </Icon>
                    </View>
                    <View>
                        <Icon name={'restaurant-outline'} size={16}> 
                            <Text>Serves 2</Text>
                        </Icon>
                        <Icon name={'flame'} size={16} color={COLORS.red} style={{marginTop: 10}}> 
                            <Text>394</Text>
                        </Icon>
                    </View>
                </View>
            </View>
                <Icon name={'heart-outline'} size={20} color={COLORS.red}/>

        </View>
    )
}

const styles = StyleSheet.create( {
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
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