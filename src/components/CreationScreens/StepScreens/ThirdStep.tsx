import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions, Modal, Pressable, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import { COLORS } from "../../../themes/COLORS";
import { InputText } from "../../components/InputText";
import { fetchRecipeCategories } from "../../../http/recipeCategoriesAPI";
import { CheckBox } from "../../components/CheckBox";
import { ModalV } from "../../components/Modal";

export const ThirdStep = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const [categories, setCategories] = useState<RecipeCategories[]>([])


    const [selectedItems, setSelectedItems] = useState<string[]>([])

    console.log(selectedItems)

    const onCheckBoxClick = (itemId: string) => {
        const isSelected = selectedItems.includes(itemId)
        if(isSelected) {
            setSelectedItems(prev => prev.filter(id => id !== itemId))
        } else {
            setSelectedItems(prev => [...prev, itemId])
        }
    }

    useEffect(() => {
        fetchRecipeCategories().then(data => setCategories(data)).catch(e => console.log(e))
    }, [])

    return (
        <View style={styles.inner}>
        <View style={styles.titleContainer}>
                <Text style={styles.textTitle}>Шаг 3. Введите детали</Text>
        </View>
        <View style={styles.textInputContainer}>
            <View style={styles.inputContainer}>
                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                    <Text>Выберите категории</Text>
                </Pressable>
                <ModalV visible={modalVisible} onPress={() => setModalVisible(!modalVisible)}>           
                    {categories.map((item) => 
                        <CheckBox text={item.name} key={item._id} checked={selectedItems.includes(item._id)} onPress={() => onCheckBoxClick(item._id)}/>
                    )}
                </ModalV>
            </View>
            <View style={styles.inputContainer}>
                <Icon name="stopwatch-outline" size={24} color={COLORS.deepOrange}/>
                <InputText keyboardType="numeric" placeholder="Время подготовки" onChangeText={text => {}}/>
            </View>
            <View style={styles.inputContainer}>
                <Icon name="stopwatch-outline" size={24} color={COLORS.deepOrange}/>
                <InputText keyboardType="numeric" placeholder="Время приготовления" onChangeText={text => {}}/>
            </View>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    inner: {
    },
    textInputContainer: {
        rowGap: 10
    },
    titleContainer: {
        marginVertical: 10
    },
    textTitle: {
        fontFamily: 'Rubik-Medium',
        fontSize: 20
    },
    inputContainer:{
        flexDirection: 'row', 
        alignItems:'center', 
        columnGap: 10
    },
    centeredModal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalView: {
        backgroundColor: COLORS.white,
        padding: 35, 
        borderRadius: 15,
        elevation: 2,
        shadowOffset: {
        width: 0,
        height: 1,
        },
       shadowOpacity: 0.15,
       shadowRadius: 2,
    },
    modalCategories: {
        marginBottom: 10
    },
    modalHide: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.orange,
        borderRadius: 5,
    },
    modalHideText: {
        fontSize: 20,
        fontFamily: 'Rubik-Regular',
        color: COLORS.white
    }
})