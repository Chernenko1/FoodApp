import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack"
import { useEffect, useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { ProfileParamList } from "../../screens/ProfileStack"
import { COLORS } from "../../themes/COLORS"
import { useAppSelector } from "../../store/hooks"
import { UserDetailItem } from "./UserDetailsItem"
import { UserWeightModal } from "./UserDetailsModal/UserWeightModal"

type NavProps = NativeStackScreenProps<ProfileParamList, 'UserDetails'>

export const UserDetails = ({navigation}:NavProps) => {
    const [weightModal, setWeightModal] = useState(false)
    const {details} = useAppSelector(state => state.user.user)

    useEffect(() => {
        navigation.setOptions({
            headerTitle: 'Персональные данные', 
        })
    }, [navigation])

    return (
        <View style={styles.mainView}>
            <View style={styles.contentView}>
                <UserDetailItem title="Цель" info={details.purpose}>
                    
                </UserDetailItem>
                <UserDetailItem title="Вес" info={details.weight + ' кг'} onPress={() => setWeightModal(!weightModal)}>
                    <UserWeightModal text={String(details.weight)} visible={weightModal} closeModal={() => setWeightModal(!weightModal)}/>
                </UserDetailItem>
                <UserDetailItem title="Рост" info={details.height + ' см'}/>
                <UserDetailItem title="Возраст" info={details.age}/>
                <UserDetailItem title="Гендер" info={details.gender}/>
                <UserDetailItem title="Активность" info={details.activity}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    contentView: {
    },
})