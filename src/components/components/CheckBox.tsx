import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { COLORS } from '../../themes/COLORS'

interface Props {
    text: string
    checked: boolean
    onPress: (isChecked: boolean) => void
}

export const CheckBox = ({text, checked, onPress}: Props) => {

    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.checkBoxTouch} onPress={() => onPress(!checked)}>
            <View style={styles.checkBoxView}>
                <Icon name={checked ? 'checkbox-outline' : 'square-outline'} size={24} color={checked ? COLORS.orange : COLORS.gray}/>
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    checkBoxTouch: {
        marginBottom: 5,
    },
    checkBoxView: {
        flexDirection: 'row', 
        alignItems: 'center',
        columnGap: 10,
    },
    text: {
        fontSize: 20, 
        fontFamily: 'Rubik-Regular'
    }
})