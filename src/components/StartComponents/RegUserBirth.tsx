import { StyleSheet, View } from "react-native"
import { AppText } from "../components/AppText"
import { OneValidInput } from "./OneValidInput"
import { useState } from "react"
import { Button } from "../components/Button"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AuthParamList } from "../../navigation/AuthStackNavigation"
import { useTheme } from "@react-navigation/native"

type Navigation = NativeStackScreenProps<AuthParamList>

export const RegUserBirth = ({navigation}:Navigation) => {
    const {colors} = useTheme()
    
    const handlePress = (value: string) => {
        navigation.navigate('RegUserWeight')
    }

    return (
        <View style={[styles.mainView, {backgroundColor: colors.background}]}>
            <AppText style={styles.headerText}>Укажите ваш возраст</AppText>
                <OneValidInput 
                    min={50} 
                    max={300} 
                    errorText="Введен некорректный вес"
                    handlePress={handlePress}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingHorizontal: 25,
        paddingVertical: 25,
    },
    headerText: {
        fontSize: 24
       }
})