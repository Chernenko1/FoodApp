import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useEffect } from "react"
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"
import { HomeParamList } from "../../../screens/HomeStack"
import { COLORS } from "../../../themes/COLORS"
import { Calories } from "../EnergyInfoComonents/Calories"
import { Product } from "../../ProductComponent/ProductCard"
import { ButtonIcon } from "../../components/ButtonIcon"

type Navigation = NativeStackScreenProps<HomeParamList, 'MealInfo'>

export const MealInfo = ({navigation, route}: Navigation) => {

    const {headerTitle} = route.params

    useEffect(() => {
        navigation.setOptions({
            title: headerTitle, 
            headerStyle:{ backgroundColor: COLORS.deepOrange},
            headerTintColor: COLORS.white,
            headerTitleAlign: 'center',
        })
    }, [])

    useEffect(() => {
        
    }, [])

    return (
        <SafeAreaView>
            <ScrollView style={styles.mainView}>
                <View style={styles.headerView}>
                    <View style={styles.progressView}>
                            <View style={{width: 110, height: 110, borderRadius: 55, backgroundColor: COLORS.white, justifyContent: 'center'}}>
                                <Calories type="Осталось" count={2440}/>
                            </View>
                    </View>
                    <View style={styles.dateView}>
                        <Text style={styles.dateText}>08 месяц 2024</Text>
                    </View>
                </View>
                <View style={styles.productView}>
                    <Product productName="Название" productQuantity="100 г" kcal={100}/>
                    <Product productName="Название" productQuantity="100 г" kcal={100}/>
                    <Product productName="Название" productQuantity="100 г" kcal={100}/>
                    <Product productName="Название" productQuantity="100 г" kcal={100}/>
                    <Product productName="Название" productQuantity="100 г" kcal={100}/>
                    <Product productName="Название" productQuantity="100 г" kcal={100}/>
                    <Product productName="Название" productQuantity="100 г" kcal={100}/>
                </View>
            </ScrollView>
                <Pressable onPress={() => navigation.navigate('Search', {backScreen: route.name})}>
                    <View style={styles.addIconView}>
                        <ButtonIcon name="add-outline" size={40} backgroundColor={COLORS.deepOrange}/>
                    </View>
                </Pressable>    
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    progressView: {
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: COLORS.orange,
        width: 140,
        height: 140,
        borderRadius: 70,
    },
    mainView: {

    },
    headerView: {
        alignItems: 'center',
        paddingBottom: 20,
        backgroundColor: COLORS.deepOrange
    },
    dateView: {
        top: 15,
    },
    productView: {
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 25,
        rowGap: 10
    },
    addIconView: {
        position: 'absolute',
        bottom: 60,
        right: 0,
    },
    dateText: {
        fontFamily: 'Rubik-Regular',
        fontSize: 20,
        color: COLORS.white
    },
})