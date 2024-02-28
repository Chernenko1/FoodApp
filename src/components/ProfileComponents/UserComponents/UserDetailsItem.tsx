import { Pressable, StyleSheet, Text, View } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import { COLORS } from "../../../themes/COLORS"
import { HorizontalRule } from "../../components/HorizontalRule"
import { ModalV } from "../../components/Modal"
import { ReactNode, useState } from "react"
import { AppText } from "../../components/AppText"

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
                    <AppText style={styles.titleText} fontWeight="light">{title}</AppText>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <AppText style={styles.infoText} fontWeight="light">{info}</AppText>
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
        color: COLORS.black
    },
    infoText: {
        color: COLORS.black,
        fontSize: 15
    }
})