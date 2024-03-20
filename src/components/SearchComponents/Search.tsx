import React, { useEffect, useState } from "react";
import { Dimensions, Keyboard, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Icon from 'react-native-vector-icons/Ionicons'

import { searchProduct } from "../../http/productAPI";
import { COLORS } from "../../themes/COLORS";
import { HomeParamList } from "../../screens/HomeStack";
import { Pressable } from "react-native";
import { AppText } from "../components/AppText";
import { useTheme } from "@react-navigation/native";

type NavProps = NativeStackScreenProps<HomeParamList, 'Search'>

export const Search = ({navigation, route}: NavProps) => {
    const [value, setValue] = useState('')
    const [searchAnswer, setSearchAnswer] = useState<Product[]>([])

    const {backScreen} = route.params

    const {colors} = useTheme()

    const nextScreen = (item:Product) => { 
        navigation.navigate('ProductInfo', {backScreen: backScreen, productData: item})
    }

    useEffect(() => {
        if(value) {
            searchProduct(value).then((data: Product[]) => setSearchAnswer(data)).catch(e => console.log(e))
        }
    }, [value])

    return (
        <SafeAreaView style={styles.container}> 
           <View style={styles.containerInput}>
                <Icon name='arrow-back-outline' size={30} color={colors.text} onPress={() => navigation.goBack()}/>
                <TextInput style={[styles.input, {borderColor: colors.border}]} value={value} onChangeText={text => setValue(text)} multiline={true}/>
           </View>
           <KeyboardAvoidingView behavior="height">
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View style={styles.containerAnswer}>
                            {searchAnswer.map(item => 
                            <Pressable key={item._id} onPress={() => nextScreen(item)}> 
                                <View style={styles.containerText}>
                                    <AppText style={styles.text}>{item.name}</AppText>
                                </View>
                            </Pressable>
                            )}
                    </View>
                </TouchableWithoutFeedback>
           </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    }, 
    containerInput: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 10,
        marginTop: 10,
    },
    containerAnswer: {
        rowGap: 5,
        marginTop: 15
    },
    containerText: {
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderBottomWidth: 0.2,
        borderRadius: 2
    },
    input: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 0.5,
        borderRadius: 10,
        fontSize: 20,
        fontFamily: 'Rubik-Regular',
        width: Dimensions.get('screen').width * 0.8
    },
    text: {
        fontSize: 18,
    }
})