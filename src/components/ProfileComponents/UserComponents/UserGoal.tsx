import { StyleSheet, Text, View } from "react-native"
import { COLORS } from "../../../themes/COLORS"
import { UserGoalItem } from "./UserGoalItem"
import { useEffect } from "react"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { ProfileParamList } from "../../../screens/ProfileStack"
import { useAppDispatch, useAppSelector } from "../../../store/hooks"
import { updateUserDetails } from "../../../http/userAPI"
import { setUser} from "../../../store/slices/userSlice"

type NavProps = NativeStackScreenProps<ProfileParamList, 'UserGoal'>

export const UserGoal = ({navigation}: NavProps) => {

    const {details} = useAppSelector(state => state.user.user)
    const dispatch = useAppDispatch()

    useEffect(() => {
        navigation.setOptions({
            headerTitle: "Мои цели",
            headerShadowVisible: true
        })
    }, [navigation])

    const saveData = async (goal: number) => {
       await updateUserDetails({id: '65d614788d7d99748725f156', 'data': goal, type: 'purpose', updateMacros: true})
       .then((data: User) => dispatch(setUser(data)))
    }

    return (
        <View style={styles.activityView}>
           <UserGoalItem
            header="Снижение веса" 
            description="Снижайте свой вес без проблем"  
            onPress={() => saveData(0)}
            status={details.purpose === 0 ? true : false}
            />
           <UserGoalItem 
            header="Поддержание веса"
            description="Сохраняйте свой вес без проблем"  
            onPress={() => saveData(1)}
            status={details.purpose === 1 ? true : false}
            />
           <UserGoalItem 
            header="Набор веса" 
            description="Набирайте свой вес без проблем" 
            onPress={() => saveData(2)}
            status={details.purpose === 2 ? true : false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    activityView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})