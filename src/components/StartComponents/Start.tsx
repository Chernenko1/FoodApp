import React from "react";
import {ImageBackground, Pressable, StyleSheet, View } from "react-native";
import { AppText } from "../components/AppText";
import { COLORS } from "../../themes/COLORS";
import { Button } from "../components/Button";
import { TextButton } from "../components/TextButton";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthParamList } from "../../navigation/AuthStackNavigation";
import { useNavigation } from "@react-navigation/native";

type Navigation = NativeStackNavigationProp<AuthParamList,'StackHome'>

export const Start = () => {

    const navigation = useNavigation<Navigation>()

    return (
        <ImageBackground 
            source={require('../../../assets/images/Auth.jpg')} 
            style={styles.backView}
            blurRadius={2}
            >
            <AppText style={styles.headerText} fontWeight="medium">FoodStyle</AppText>
            <View style={styles.bottomView}>
                <AppText style={styles.titleText} fontWeight="medium">Здоровое питание — это просто.</AppText>
                <AppText style={styles.descriptionText}>Питание — это ключ к здоровому весу, хорошему настроению, спокойному сну и долголетию.</AppText>
                <Button style={{paddingHorizontal: '30%'}} title="Начать" color={COLORS.orange} onPress={() => navigation.navigate('RegGoal', {})} textColor={COLORS.black}/>
                <View style={styles.loginView}>
                    <AppText style={styles.loginText}>Уже есть аккаунт?</AppText>
                    <TextButton style={styles.loginButton} title="Войти" onPress={() => navigation.navigate('Login')}/>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20
    },
    bottomView: {
        alignItems: 'center',
        rowGap: 10
    },
    loginView: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 5
    },
    loginButton: {
        fontSize: 18,
        color: COLORS.orange
    },
    loginText: {fontSize: 15},
    titleText: {
        fontSize: 24
    },
    descriptionText: {
        fontSize: 18
    },
    headerText: {
        fontSize: 24,
        color: COLORS.white
    }
})