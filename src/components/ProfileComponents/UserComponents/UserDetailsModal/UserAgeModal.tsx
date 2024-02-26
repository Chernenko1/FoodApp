import { useState } from "react"
import {Text, TextInput, View } from "react-native"
import { ModalV } from "../../../components/Modal"
import { useAppDispatch } from "../../../../store/hooks"
import { updateUserDetails } from "../../../../http/userAPI"
import { updateDetails } from "../../../../store/slices/userSlice"

import { styles } from "./styles"

interface Props {
    text: string,
    visible: boolean,
    closeModal: () => void
}

export const UserAgeModal = ({text,visible,closeModal}: Props) => {

    const [value, setValue] = useState(text)
    const dispatch = useAppDispatch()

    function handlePress () {
        updateUserDetails({id: "65d614788d7d99748725f156", type: 'age', data: value})
        dispatch(updateDetails({type: 'age', value}))
        closeModal()
    }

    return (
        <ModalV visible={visible} closeModal={closeModal} onPress={handlePress}>
            <View style={styles.mainView}>
                <Text style={styles.titleText}>Ваш возраст: </Text>
                <View style={styles.inputView}>
                    <TextInput 
                    style={styles.input} 
                    value={value} 
                    onChangeText={text => setValue(text)}
                    maxLength={3} 
                    keyboardType="numeric"
                    />
                    <Text style={styles.input}>лет</Text>
                </View>
            </View>
        </ModalV>
    )
}

