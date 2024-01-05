import React from "react";
import { KeyboardAvoidingView, StyleSheet, TextInput, View } from "react-native";

export const SearchInput = () => {
    return (
        <KeyboardAvoidingView behavior='height'>
 
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="Search..."/>
            </View>

        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container :{
        marginTop: 10,
        marginBottom: 10
    },
    input: {
        borderColor: 'lightgray',
        borderWidth: 1,
        paddingVertical: 8,
       
    }
})