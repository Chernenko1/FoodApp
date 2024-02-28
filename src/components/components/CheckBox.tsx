import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { COLORS } from '../../themes/COLORS'
import { AppText } from './AppText'

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
                <AppText style={styles.text}>{text}</AppText>
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
    }
})