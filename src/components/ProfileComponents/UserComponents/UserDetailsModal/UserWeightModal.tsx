import { useState } from "react"
import {StyleSheet, Text, TextInput, View } from "react-native"
import { COLORS } from "../../../../themes/COLORS"
import { ModalV } from "../../../components/Modal"
import { useAppDispatch, useAppSelector } from "../../../../store/hooks"
import { updateUserDetails } from "../../../../http/userAPI"
import { updateDetails } from "../../../../store/slices/userSlice"

import { styles } from "./styles"
import { AppText } from "../../../components/AppText"
import { useTheme } from "@react-navigation/native"


interface Props {
    text: string,
    visible: boolean,
    closeModal: () => void
}

export const UserWeightModal = ({text,visible,closeModal}: Props) => {

    const [value, setValue] = useState(text)

    const dispatch = useAppDispatch()
    const {colors} = useTheme()

    const {_id} = useAppSelector(state => state.user.user)

    function handlePress () {
        updateUserDetails({id: _id, type: 'weight', data: value})
        dispatch(updateDetails({type: 'weight', value}))
        closeModal()
    }

    return (
        <ModalV visible={visible} closeModal={closeModal} onPress={handlePress}>
            <View style={styles.mainView}>
                <AppText style={[styles.titleText, {color: colors.text}]}>Ваш вес: </AppText>
                <View style={styles.inputView}>
                    <TextInput 
                    style={[styles.input, {color:  colors.text}]}
                    value={value} 
                    onChangeText={text => setValue(text)}
                    maxLength={3} 
                    keyboardType="numeric"
                    />
                    <Text style={[styles.input, {color:  colors.text}]}>кг</Text>
                </View>
            </View>
        </ModalV>
    )
}
