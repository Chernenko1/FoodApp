import { useState } from "react"
import { StyleSheet, Text, TextInput, View } from "react-native"
import { COLORS } from "../../../themes/COLORS"

interface Props {
    title: string,
    amount: string,
    onPress: () => void
}

export const KBFUSsettingsItem = ({title, amount, onPress}: Props) => {
    const [value, setValue] = useState(amount)

    return (
        <View style={styles.inputView}>
        <Text style={styles.inputText}>{title}</Text>
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={text => setValue(text)} 
            keyboardType="numeric" 
            maxLength={5}
        />
    </View>
    )
}

const styles = StyleSheet.create({
    inputView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input: {
        fontSize: 20,
        backgroundColor: COLORS.lightGray,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderRadius: 1,
        minWidth: '20%'
    },
    inputText: {
        fontFamily: 'Rubik-Regular',
        fontSize: 24,
        color: COLORS.black
    },
})