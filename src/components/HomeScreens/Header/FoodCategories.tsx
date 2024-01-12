import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { FakeCategories } from "../../../data/FakeCategories";
import { ImageBackground } from "react-native";

export const FoodCategories = () => {
    return (
        <View style={styles.container}> 
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
            showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: -20,
        marginTop: 10
    },
    catContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        columnGap: 10,
        marginVertical: 10,
        marginLeft: 2
    },
    image: {
        borderRadius: 50,
        height: 75,
        width: 75,
    },
    text: {
        position: 'absolute',
        color: 'white',
        fontSize: 15
    }
})