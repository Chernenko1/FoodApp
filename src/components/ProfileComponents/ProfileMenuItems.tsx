import { Pressable, StyleSheet, Text, View } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import { COLORS } from "../../themes/COLORS";
import { ProfileMenuItem } from "./ProfileMenuItem";
import { HorizontalRule } from "../components/HorizontalRule";


export const ProfileMenuItems = () => {
    return (
       <View style={styles.mainView}>
            <ProfileMenuItem title="Персональные данные" icon="person-outline" onPress={() => {}}/>
            <HorizontalRule />
            <ProfileMenuItem title="Настройка БЖУ" icon="pie-chart-outline" onPress={() => {}}/>
            <HorizontalRule />
            <ProfileMenuItem title="Настрока ккал" icon="flame-outline" onPress={() => {}}/>
       </View>
    )
}

const styles = StyleSheet.create({
    mainView:{
    },
})