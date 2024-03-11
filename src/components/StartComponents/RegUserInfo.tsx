import { useState } from "react"
import { ScrollView, StyleSheet, View } from "react-native"
import * as Yup from 'yup'
import { useFormik } from "formik"
import { AppText } from "../components/AppText"
import { OneValidInput } from "./OneValidInput"
import { Button } from "../components/Button"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AuthParamList } from "../../navigation/AuthStackNavigation"
import { useTheme } from "@react-navigation/native"
import { InputText } from "../components/TextInput"
import { COLORS } from "../../themes/COLORS"

type Navigation = NativeStackScreenProps<AuthParamList>

export const RegUserInfo = ({navigation, route}:Navigation) => {
    const {colors} = useTheme()

    const InfoSchema = Yup.object().shape({
        age: Yup.number().required("Указан некорректный возраст").min(10).max(100),
        weight: Yup.number().min(20).max(400).required("Указан некорректный вес"),
        height: Yup.number().required("Указан некорректный рост").min(40).max(230),
        fatPercentage: Yup.number().required("Указан некорректный процент жира").min(1).max(100)
    })

    const {handleChange, handleSubmit, values, handleBlur, errors, touched} = useFormik({
        validationSchema: InfoSchema,
        initialValues: {age: '', weight: '', height: '', fatPercentage: ''},
        onSubmit: (values) => {
            navigation.navigate('RegActivity', 
            {...route.params, 
                age: values.age, 
                height: values.height, 
                weight: values.weight,
                fatPercentage: values.fatPercentage
            })}
    })

    return (
        <View style={[styles.mainView, {backgroundColor: colors.background}]}>
            <ScrollView contentContainerStyle={{alignItems:'center', rowGap: 10}} showsVerticalScrollIndicator={false}>
                <AppText style={styles.headerText}>Укажите ваш возраст</AppText>
                <InputText
                        value={values.age} 
                        style={styles.input} 
                        onChangeText={handleChange('age')}
                        onBlur={handleBlur('age')}
                        error={errors.age}
                        touched={touched.age}
                        keyboardType="numeric"
                        maxLength={3}
                        height={80}
                />
                    {errors.age && <AppText style={{fontSize: 18}}>{errors.age}</AppText>}
                    
                    <AppText style={styles.headerText}>Укажите ваш вес</AppText>
                    <InputText
                        value={values.weight} 
                        style={styles.input} 
                        onChangeText={handleChange('weight')}
                        onBlur={handleBlur('weight')}
                        error={errors.weight && touched.weight ? errors.weight : null}
                        touched={touched.weight}
                        keyboardType="numeric"
                        height={80}
                        maxLength={3}
                    />
                    {errors.weight && <AppText style={{fontSize: 18}}>{errors.weight}</AppText>}

                    <AppText style={styles.headerText}>Укажите ваш рост</AppText>
                    <InputText
                        value={values.height} 
                        style={styles.input} 
                        onChangeText={handleChange('height')}
                        onBlur={handleBlur('height')}
                        error={errors.height}
                        touched={touched.height}
                        keyboardType="numeric"
                        height={80}
                        maxLength={3}
                    />
                    {errors.height && <AppText style={{fontSize: 18}}>{errors.height}</AppText>}

                    <AppText style={styles.headerText}>Укажите ваш процент жира</AppText>
                    <InputText
                        value={values.fatPercentage} 
                        style={styles.input} 
                        onChangeText={handleChange('fatPercentage')}
                        onBlur={handleBlur('fatPercentage')}
                        error={errors.fatPercentage}
                        touched={touched.fatPercentage}
                        keyboardType="numeric"
                        height={80}
                        maxLength={3}
                    />
                    {errors.fatPercentage && <AppText style={{fontSize: 18, color: 'red'}}>{errors.fatPercentage}</AppText>}
            </ScrollView>
            <Button title="Далее" onPress={handleSubmit} textColor={COLORS.black} color={COLORS.orange}/>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        paddingVertical: 25,
    },
    headerText: {
        fontSize: 24
    },
    input: {
        flex: 1,
        borderWidth: 3,
        borderRadius: 10,
        paddingHorizontal: 20,
        fontSize: 40
    }
})