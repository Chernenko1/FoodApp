import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { HeaderButton } from "../../components/HeaderButton";

export const SecondStep = ({navigation, route}) => {
    console.log(route.params)
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HeaderButton title="следущий шаг" disabled={true} onPress={() => {}}/>
            )
        })
    }, [])
    return (
        <View>
           <Text>2</Text>
        </View>
    )
}