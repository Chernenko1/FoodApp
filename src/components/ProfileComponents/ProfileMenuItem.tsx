import { Pressable, StyleSheet, Text, View } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import { COLORS } from "../../themes/COLORS";
import { HorizontalRule } from "../components/HorizontalRule";


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
                <Text style={styles.textTitle}>{title}</Text>
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
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: COLORS.white,
    },
    leftView:{ 
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 15
    },
    textTitle: {
        fontFamily: 'Rubik-Light',
        fontSize: 18,
        color: COLORS.black
    }
})