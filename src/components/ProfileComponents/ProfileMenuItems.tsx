import { StyleSheet, View } from "react-native"
import { ProfileMenuItem } from "./ProfileMenuItem";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ProfileParamList } from "../../screens/ProfileStack";

type Navigation = NativeStackScreenProps<ProfileParamList, 'StackProfile'>

export const ProfileMenuItems = () => {

    const navigation: Navigation = useNavigation()

    return (
       <View style={styles.mainView}>
            <ProfileMenuItem title="Персональные данные" icon="person-outline" onPress={() => navigation.navigate('UserDetails')}/>
            <ProfileMenuItem title="Настройка KБЖУ" icon="pie-chart-outline" onPress={() => navigation.navigate('KBFUSettings')}/>
       </View>
    )
}

const styles = StyleSheet.create({
    mainView:{
    },
})