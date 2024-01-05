import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { FakeCategories } from "../../data/FakeCategories";
import { ImageBackground } from "react-native";

export const FoodCategories = () => {
    return (
        <View> 
            <FlatList 
            data={FakeCategories} 
            keyExtractor={(itm, ind) => itm.name + ind} 
            renderItem={({item}) => (
                <View style={styles.catContainer}>
                    <Image source={{uri: item.image}} style={styles.image} blurRadius={10}/>
                    <Text style={styles.text}>{item.name}</Text>
                </View>
            )} 
            horizontal={true}
            contentContainerStyle={{gap: 10}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    catContainer: {
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: 10
    },
    image: {
        borderRadius: 50,
        height: 70,
        width: 70,
    },
    text: {
        position: 'absolute',
        color: 'white',
        fontSize: 15
    }
})