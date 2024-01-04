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
                    <Image source={{uri: item.image}} width={100} height={100} style={styles.image}/>
                    <Text style={{position: 'absolute', color: 'white'}}>{item.name}</Text>
                </View>
            )} 
            horizontal={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    catContainer: {
        width: 100, 
        height: 100,
        marginLeft: 10,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        borderRadius: 50
    }
})