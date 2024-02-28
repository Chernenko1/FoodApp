import { Pressable, StyleSheet, View } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import { AppText } from "../../components/AppText"
import { useTheme } from "@react-navigation/native"

interface Props {
    title: string,
    onPress?: () => void,
    info: string | number,
    children?: React.ReactNode
}

export const UserDetailItem = ({title, onPress, info, children}:Props) => {

    const {colors} = useTheme()

    return (
        <Pressable onPress={onPress}>
            <View style={[styles.mainView, {backgroundColor: colors.card}]}>
                <View>
                    <AppText style={styles.titleText} fontWeight="light">{title}</AppText>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <AppText style={styles.infoText} fontWeight="light">{info}</AppText>
                    <Icon name="chevron-forward-outline" size={20} color={colors.text}/>
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
        borderRadius: 10,
        elevation: 2
    },
    titleText: {
        fontSize: 18,
    },
    infoText: {
        fontSize: 15
    }
})