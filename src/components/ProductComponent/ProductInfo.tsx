import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useEffect, useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { HomeParamList } from "../../screens/HomeStack"
import Icon from 'react-native-vector-icons/Ionicons'
import { InputText } from "../components/TextInput"
import { COLORS } from "../../themes/COLORS"
import { Button } from "../components/Button"


type Navigation = NativeStackScreenProps<HomeParamList, 'ProductInfo'>

export const ProductInfo = ({navigation, route}: Navigation) => {

    const [value, setValue] = useState('100')

    const {productData,backScreen } = route.params

    const buttonPress = () => {
        navigation.navigate(backScreen,{})
    }

    useEffect(() => {
        navigation.setOptions({headerTitle: productData.name})
    }, [])

    return (
        <View style={styles.mainView}>
            <View style={styles.inputMainView}>
                <View style={styles.inputView}>
                    <Icon name="scale-outline" size={35} style={styles.icon} color={COLORS.orange}/>
                    <InputText value={value} keyboardType='numeric'/>
                </View>
                <View style={styles.inputView}>
                    <Icon name="list-outline" size={35} style={styles.icon} color={COLORS.orange}/>
                    <InputText value={'г'} editable={false}/>
                </View>
                <Button title="Сохранить" color={COLORS.deepOrange} textColor={COLORS.white} onPress={buttonPress}/>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    mainView:{

    },
    inputMainView: {
        paddingVertical: 20,
        paddingHorizontal: 25,
        rowGap: 20
    },
    inputView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        columnGap: 10,
    },
    icon: {

    }
})