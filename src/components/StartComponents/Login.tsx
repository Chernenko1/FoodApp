import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { useFormik } from "formik";
import * as Yup from 'yup'
import { AppText } from '../components/AppText'
import { InputText } from '../components/TextInput'
import { Button } from '../components/Button'
import { COLORS } from '../../themes/COLORS'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthParamList } from '../../navigation/AuthStackNavigation';
import { login } from '../../http/authAPI';
import { useAppDispatch } from '../../store/hooks';
import { setUser } from '../../store/slices/userSlice';
import { setStorageItem } from '../../utils/setStorageItem';

type Navigation = NativeStackScreenProps<AuthParamList, 'Login'>

export const Login = ({navigation}: Navigation) => {

    const dispatch = useAppDispatch()

    const LoginSchema = Yup.object().shape({
        email: Yup.string().email('').required('Неккоректный email')
    })

    const {handleChange, handleSubmit, values, handleBlur, errors, touched} = useFormik({
        validationSchema: LoginSchema,
        initialValues: {email: '', password: ''},
        onSubmit: (values) => sendReq()
    })

    function sendReq () {
        login({email: values.email, password: values.password})
        .then((data) => {dispatch(setUser(data)); setStorageItem('isAuth', 'true')})
        .catch((e) => console.log(e))
    }

    useEffect(() => {
        navigation.setOptions({headerTitle: "Авторизация"})
    }, [navigation])

    return (
        <View style={styles.mainView}> 
            <View style={styles.inputView}>
                    <AppText style={styles.titleText}>Почта</AppText>
                    <InputText 
                        value={values.email} 
                        style={styles.input} 
                        onChangeText={handleChange('email')} 
                        keyboardType='email-address'
                        onBlur={handleBlur('email')}
                        error={errors.email}
                        touched={touched.email}
                    />
                    {errors.email && <AppText>{errors.email}</AppText>}
                    <AppText style={styles.titleText}>Пароль</AppText>
                    <InputText 
                        value={values.password} 
                        style={styles.input} 
                        onChangeText={handleChange('password')}
                        keyboardType='visible-password'
                    />
            </View>
            <View style={{alignItems: 'center'}}>
                <Button 
                    style={{width: '100%'}} 
                    title='Авторизироваться' 
                    color={COLORS.orange} 
                    textColor={COLORS.black}
                    onPress={() => handleSubmit()}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 25,
        justifyContent: 'space-between',
    },
    inputView: {
        alignItems: 'flex-start',
    },
    input: {
        borderBottomWidth: 1
    },
    titleText: {
        fontSize: 20
    },
})