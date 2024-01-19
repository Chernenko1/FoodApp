import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable, TextInput, Button } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import { COLORS } from "../../../themes/COLORS";
import { InputText } from "../../components/InputText";
import { fetchRecipeCategories } from "../../../http/recipeCategoriesAPI";
import { CheckBox } from "../../components/CheckBox";
import { ModalV } from "../../components/Modal";
import { HorizontalRule } from "../../components/HorizontalRule";

export const ThirdStep = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const [categories, setCategories] = useState<RecipeCategories[]>([])
    const [selectedItems, setSelectedItems] = useState<string[]>([])
    const [description, setDescription] = useState([])

    const [textInputs, setTextInputs] = useState(['']);

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
                    <Text style={styles.textTitle}>Шаг 3. Введите подробную инофрмацию</Text>
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
                    <Pressable onPress={() => {}}>
                        <Text style={styles.inputText}>Отправить ингредиеты</Text>
                    </Pressable>
                </View>
                <HorizontalRule />
                <View style={{ padding: 20 }}>
                    {textInputs.map((value, index) => {
                        return (
                        <View key={index} style={{ marginBottom: 10 }}>
                            <TextInput
                            // style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 5 }}
                            value={value}
                            onChangeText={(text) => {
                                const newInputs = [...textInputs];
                                newInputs[index] = text;
                                setTextInputs(newInputs);
                            }}
                            />
                            <Button title="Удалить" onPress={() => removeTextInput(index)} />
                        </View>
                        );
                    })}
                    <Button title="Добавить" onPress={addTextInput} />
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
    }
})