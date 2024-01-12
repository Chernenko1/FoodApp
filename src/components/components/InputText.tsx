import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { COLORS } from "../../themes/COLORS";

type Props = {
    placeholder: string
    onChangeText: (text: string) => any
}

export const InputText = ({placeholder, onChangeText}: Props) => {
    const [value, setValue] = useState("");

    useEffect(() => {
        onChangeText(value)
    }, [value])

    return (
        <TextInput style={styles.textInput} value={value} onChangeText={text => setValue(text)} placeholder={placeholder}/>
    )
}

const styles = StyleSheet.create({
    textInput: {
       fontSize: 18,
       borderBottomWidth: 0.5,
       borderBottomColor: COLORS.orange,
       padding: 5,
    },
})