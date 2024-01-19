import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable, TextInput, Button, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import { COLORS } from "../../../themes/COLORS";
import { fetchRecipeCategories } from "../../../http/recipeCategoriesAPI";
import { CheckBox } from "../../components/CheckBox";
import { ModalV } from "../../components/Modal";
import { HorizontalRule } from "../../components/HorizontalRule";
import { useNavigation } from "@react-navigation/native";

export const ThirdStep = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const [categories, setCategories] = useState<RecipeCategories[]>([])
    const [selectedItems, setSelectedItems] = useState<string[]>([])
    const [ingrediants, setIngrediants] = useState(['a'])
    const [textInputs, setTextInputs] = useState(['']);

    const navigation = useNavigation()

    const addTextInput = () => {
      setTextInputs([...textInputs, '']);
    };
  
    const removeTextInput = (index:number) => {
      const newInputs = [...textInputs];
      newInputs.splice(index, 1);
      setTextInputs(newInputs);
    };
  

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
        <View>
            <View style={styles.titleContainer}>
                    <Text style={styles.textTitle}>Шаг 3. Введите подробную информацию</Text>
            </View>
            
            <View style={styles.textInputContainer}>
                <View style={styles.inputContainer}>
                    <Pressable onPress={() => setModalVisible(!modalVisible)} style={styles.inputContainer}>
                        <Icon name="add-circle-outline" size={24} color={COLORS.deepOrange}/>
                        <Text style={styles.inputText}>Выберите категории</Text>
                    </Pressable>
                    <ModalV visible={modalVisible} onPress={() => setModalVisible(!modalVisible)}>           
                        {categories.map((item) => 
                            <CheckBox text={item.name} key={item._id} checked={selectedItems.includes(item._id)} onPress={() => onCheckBoxClick(item._id)}/>
                        )}
                    </ModalV>
                </View>
                <HorizontalRule />

                <View>
                    <Text style={styles.textPartName}>Ингредиеты</Text>
                    <View>
                        {ingrediants.map(item => <Text key={item}>1</Text>)}
                    </View>
                    <Pressable onPress={() => navigation.navigate('Search')} style={styles.pressableView}>
                        <Icon name='add-circle-outline' size={30} color={COLORS.deepOrange}/>
                        <Text style={styles.inputText}>Добавить Ингредиет</Text>
                    </Pressable>
                </View>
                <HorizontalRule />
                
                <View style={styles.descriptionView}>
                    <Text style={styles.textPartName}>Способ приготовления</Text>
                    {textInputs.map((value, index) => {
                        return (
                        <View key={index} style={styles.descriptionInputView}>
                            <TextInput
                                style={styles.descriptionInput}
                                placeholder="Напишите инструкцию..."
                                value={value}
                                onChangeText={(text) => {
                                    const newInputs = [...textInputs];
                                    newInputs[index] = text;
                                    setTextInputs(newInputs);
                                }}
                            />
                            <Icon name='close-outline' onPress={() => removeTextInput(index)} size={30} color={COLORS.deepOrange}/>
                        </View>
                        );
                    })}
                    <Pressable onPress={addTextInput} style={styles.pressableView}>
                        <Icon name='add-outline' size={30}/>
                        <Text style={styles.inputText}>Добавить больше шагов</Text>
                    </Pressable>
                </View>

            </View>
    </View>
    )
}

const styles = StyleSheet.create({
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
    inputText: {
        fontFamily: "Rubik-Regular",
        fontSize: 18
    },
    fieldView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    descriptionView: {

    },
    descriptionInputView: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10 
    },
    descriptionInput: {
        height: 40, 
        fontFamily: 'Rubik-Regular',
        fontSize: 15,
        borderColor: COLORS.orange, 
        borderBottomWidth: 1, 
        marginBottom: 5,
        width: Dimensions.get('window').width * 0.75
    },
    textPartName: {
        fontSize: 15,
        fontFamily: 'Rubik-Medium'
    },
    pressableView: {
        flexDirection: 'row', 
        alignItems: 'center',
        marginVertical: 5,
        columnGap: 5
    }
})