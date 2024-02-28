import React from 'react'
import { StyleSheet } from 'react-native'
import { Pressable, Text, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../../themes/COLORS'
import { AppText } from './AppText'

type Props = {
    title: string
    disabled: boolean
    onPress: () => void
}

export const HeaderButton = ({title,disabled, onPress}: Props) => {
    return (
        <Pressable style={disabled ? styles.inActiveComponent : styles.activeComponent} disabled={disabled} onPress={onPress}>
           <AppText style={styles.text} fontWeight='medium'>{title}</AppText>
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
            fontSize: 20,
            color: COLORS.white
        }
    }
)