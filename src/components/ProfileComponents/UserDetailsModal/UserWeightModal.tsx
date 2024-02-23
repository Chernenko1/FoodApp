import { useState } from "react"
import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native"
import { COLORS } from "../../../themes/COLORS"
import { ModalV } from "../../components/Modal"
import { useAppDispatch } from "../../../store/hooks"
import { updateUserDetails } from "../../../http/userAPI"
import { updateDetails } from "../../../store/slices/userSlice"

interface Props {
    text: string,
    visible: boolean,
    closeModal: () => void
}

export const UserWeightModal = ({text,visible,closeModal}: Props) => {

    const [value, setValue] = useState(text)
    const dispatch = useAppDispatch()

    function handlePress () {
        updateUserDetails({id: "65d614788d7d99748725f156", type: 'weight', data: value})
        dispatch(updateDetails({type: 'weight', value}))
        closeModal()
    }

    return (
        <ModalV visible={visible} closeModal={closeModal} onPress={handlePress}>
            <View style={styles.mainView}>
                <Text style={styles.titleText}>Ваш вес: </Text>
                <View style={styles.inputView}>
                    <TextInput 
                    style={styles.input} 
                    value={value} 
                    onChangeText={text => setValue(text)}
                    maxLength={3} 
                    keyboardType="numeric"
                    />
                    <Text style={styles.input}>кг</Text>
                </View>
            </View>
        </ModalV>
    )
}

const styles = StyleSheet.create({
    mainView: {
        alignItems: 'center',
        paddingVertical: 10
    },
    inputView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 40,
        color: COLORS.black,
        fontFamily: 'Rubik-Regular'
    },
    input: {
        fontSize: 35,
    }
})