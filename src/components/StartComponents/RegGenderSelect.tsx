import { Pressable, StyleSheet, View, useColorScheme } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import { AppText } from "../components/AppText"
import { COLORS } from "../../themes/COLORS"
import { useTheme } from "@react-navigation/native"
import { Button } from "../components/Button"
import { useState } from "react"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AuthParamList } from "../../navigation/AuthStackNavigation"

type Navigation = NativeStackScreenProps<AuthParamList>

export const RegGenderSelect = ({navigation, route}:Navigation) => {
    const [value, setValue] = useState<Number>()

    let {colors} = useTheme()

    let gender = (value == 1) ? true : false

    return (
        <View style={[styles.mainView, {backgroundColor: colors.background}]}>
            <AppText style={styles.headerText}>Укажите ваш пол</AppText>
            <View style={styles.genderView}>
                <Pressable style={[styles.genderCard, {backgroundColor: value === 1 ? COLORS.orange : colors.card}]} onPress={() => setValue(1)}>
                    <Icon name='male' color={COLORS.deepOrange} size={70}/>
                    <AppText style={styles.genderText}>Мужской</AppText>
                </Pressable>
                <Pressable style={[styles.genderCard, {backgroundColor: value === 2 ? COLORS.orange : colors.card}]} onPress={() => setValue(2)}>
                    <Icon name='female' color={COLORS.deepOrange} size={70}/>
                    <AppText style={styles.genderText}>Женский</AppText>
                </Pressable>
            </View>
            <Button 
                title="Далее" 
                onPress={() => navigation.navigate('RegUserInfo', {...route.params, gender})} 
                color={COLORS.orange}
                textColor={COLORS.black} 
                disabled={!value}/>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView:{
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        paddingVertical: 25
    },
    genderView: {
        rowGap: 10,
    },
    genderCard: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10,
        columnGap: 10,
        borderRadius: 10
    },
    genderText: {
        fontSize: 24
    },
   headerText: {
    fontSize: 24
   }
})