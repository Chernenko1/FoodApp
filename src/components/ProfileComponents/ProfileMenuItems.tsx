import { Pressable, StyleSheet, Text, View } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import { COLORS } from "../../themes/COLORS";
import { ProfileMenuItem } from "./ProfileMenuItem";
import { HorizontalRule } from "../components/HorizontalRule";
import { useNavigation } from "@react-navigation/native";


export const ProfileMenuItems = () => {

    const navigation = useNavigation()

    return (
       <View style={styles.mainView}>
            <ProfileMenuItem title="Персональные данные" icon="person-outline" onPress={() => navigation.navigate('UserDetails')}/>
            <ProfileMenuItem title="Настройка БЖУ" icon="pie-chart-outline" onPress={() => {}}/>
            <ProfileMenuItem title="Настрока ккал" icon="flame-outline" onPress={() => {}}/>
       </View>
    )
}

const styles = StyleSheet.create({
    mainView:{
    },
})