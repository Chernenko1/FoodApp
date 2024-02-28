import { Pressable, StyleSheet, Text, View } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import { COLORS } from "../../themes/COLORS";
import { HorizontalRule } from "../components/HorizontalRule";
import { ModalV } from "../components/Modal";
import { AppText } from "../components/AppText";


interface Props {
    onPress: () => void,
    title: string,
    icon: string
}

export const ProfileMenuItem = ({title, icon, onPress}:Props) => {
    return (
        <Pressable style={styles.mainView} onPress={onPress}>
            <View style={styles.leftView}>
                <Icon name={icon} size={20} color={COLORS.orange}/>
                <AppText style={styles.textTitle} fontWeight='light'>{title}</AppText>
            </View>
            <View>
                <Icon name='chevron-forward-outline' size={20} color={COLORS.black}/>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    mainView:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginTop: 10,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        elevation: 2
    },
    leftView:{ 
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 15
    },
    textTitle: {
        fontSize: 18,
        color: COLORS.black
    }
})