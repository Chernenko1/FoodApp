import { useState } from "react"
import {Text, TextInput, View } from "react-native"
import { ModalV } from "../../../components/Modal"
import { useAppDispatch, useAppSelector } from "../../../../store/hooks"
import { updateUserDetails } from "../../../../http/userAPI"
import { updateDetails } from "../../../../store/slices/userSlice"

import { styles } from "./styles"
import { RadioButton } from "../../../components/RadioButtons"
import { AppText } from "../../../components/AppText"
import { useTheme } from "@react-navigation/native"

interface Props {
    visible: boolean,
    closeModal: () => void
}

export const UserGenderModal = ({visible,closeModal}: Props) => {

    const [checked, setChecked] = useState(true)

    const dispatch = useAppDispatch()
    const {colors} = useTheme()

    const {_id} = useAppSelector(state => state.user.user)

    function handlePress () {
        updateUserDetails({id: _id, type: 'gender', data: checked})
        dispatch(updateDetails({type: 'gender', checked}))
        closeModal()
    }

    return (
        <ModalV visible={visible} closeModal={closeModal} onPress={handlePress}>
            <View style={styles.mainView}>
                <AppText style={[styles.titleText, {color: colors.text}]}>Ваш пол: </AppText>
                <RadioButton value="Мужской" status={checked === true ? true : false} onPress={() => setChecked(true)}/>
                <RadioButton value="Женский" status={checked === false ? true : false} onPress={() => setChecked(false)}/>
            </View>
        </ModalV>
    )
}

