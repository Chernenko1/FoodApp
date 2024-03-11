import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { useFormik } from "formik";
import * as Yup from 'yup'
import { AppText } from '../components/AppText'
import { InputText } from '../components/TextInput'
import { Button } from '../components/Button'
import { COLORS } from '../../themes/COLORS'

import { login } from '../../http/authAPI';
import { useAppDispatch } from '../../store/hooks';
import { setUser } from '../../store/slices/userSlice';

import { setAuth, setToken } from '../../store/slices/authSlice';

interface Props {
    handlePress: () => void
}

export const AuthItems = ({handlePress}: Props) => {

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
        .then((data) => {dispatch(setUser(data.user)); dispatch(setAuth(true)); dispatch(setToken(data.token))})
        .catch((e) => console.log(e))
    }

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
                    title='Зарегистрироваться' 
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
        // alignItems: 'flex-start',
    },
    input: {
        borderBottomWidth: 1,
    },
    titleText: {
        textAlign: 'left',
        fontSize: 20
    },
})