import React, { useEffect } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setUser } from "../../store/slices/userSlice";
import { UserInfo } from "./UserInfo";
import { ProfileMenuItems } from "./ProfileMenuItems";

export const Profile = () => {

    const user = useAppSelector(state => state.user.user)

    return (
        <View style={styles.mainView}>
            <UserInfo 
            username={user.username} 
            email={user.email}
            weight={user.details.weight} 
            goal={user.details.purpose}
            activity={user.details.activity}
            />
            <Text>Настройки</Text>
           <ProfileMenuItems />
        </View>
    )
}

const styles= StyleSheet.create({
    mainView: {
        flex: 1,
        paddingHorizontal: 15
    }
})