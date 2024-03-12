import { useState } from "react"
import {Text, TextInput, View } from "react-native"
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

export const UserAgeModal = ({text,visible,closeModal}: Props) => {

    const [value, setValue] = useState(text)

    const dispatch = useAppDispatch()
    const {colors} = useTheme()

    const {_id} = useAppSelector(state => state.user.user)

    function handlePress () {
        updateUserDetails({id: _id, type: 'age', data: value})
        dispatch(updateDetails({type: 'age', value}))
        closeModal()
    }

    return (
        <ModalV visible={visible} closeModal={closeModal} onPress={handlePress}>
            <View style={styles.mainView}>
                <AppText style={[styles.titleText, {color: colors.text}]}>Ваш возраст: </AppText>
                <View style={styles.inputView}>
                    <TextInput 
                    style={[styles.input, {color:  colors.text}]} 
                    value={value} 
                    onChangeText={text => setValue(text)}
                    maxLength={3} 
                    keyboardType="numeric"
                    />
                    <Text style={[styles.input, {color:  colors.text}]}>лет</Text>
                </View>
            </View>
        </ModalV>
    )
}

