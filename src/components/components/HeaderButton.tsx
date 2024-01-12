import React from 'react'
import { StyleSheet } from 'react-native'
import { Pressable, Text, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../../themes/COLORS'

type Props = {
    title: string
    disabled: boolean
    onPress: () => void
}

export const HeaderButton = ({title,disabled, onPress}: Props) => {
    return (
        <Pressable style={disabled ? styles.inActiveComponent : styles.activeComponent} disabled={disabled} onPress={onPress}>
           <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
        activeComponent: {
            backgroundColor: COLORS.orange,
            paddingHorizontal: 10,
            borderRadius: 5
        },
        inActiveComponent: {
            backgroundColor: COLORS.gray,
            paddingHorizontal: 10,
            borderRadius: 5
        },
        text: {
            fontFamily: 'Rubik-Medium',
            fontSize: 20,
            color: COLORS.white
        }
    }
)