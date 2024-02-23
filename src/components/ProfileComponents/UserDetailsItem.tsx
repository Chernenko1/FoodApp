import { Pressable, StyleSheet, Text, View } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import { COLORS } from "../../themes/COLORS"
import { HorizontalRule } from "../components/HorizontalRule"
import { ModalV } from "../components/Modal"
import { ReactNode, useState } from "react"

interface Props {
    title: string,
    onPress?: () => void,
    info: string | number,
    children?: React.ReactNode
}

export const UserDetailItem = ({title, onPress, info, children}:Props) => {

    return (
        <Pressable onPress={onPress}>
            <View style={styles.mainView}>
                <View>
                    <Text style={styles.titleText}>{title}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.infoText}>{info}</Text>
                    <Icon name="chevron-forward-outline" size={20} color={COLORS.black}/>
                </View>
                {children}
            </View>
            
        </Pressable>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginTop: 10,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        elevation: 2
    },
    titleText: {
        fontSize: 18,
        fontFamily: 'Rubik-Light',
        color: COLORS.black
    },
    infoText: {
        fontFamily: 'Rubik-Light',
        color: COLORS.black,
        fontSize: 15
    }
})