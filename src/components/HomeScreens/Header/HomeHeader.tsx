import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../../../themes/COLORS'
import  Icon  from 'react-native-vector-icons/Ionicons'

export const HomeHeader = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.hiText}>Hi, User</Text>
                <Text style={{fontSize: 18}}>What do you want to eat today?</Text>
            </View>
            <TouchableOpacity activeOpacity={0.7}>
                <Icon name='notifications-outline' size={30} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    hiText: {
        color: COLORS.orange,
        fontSize: 30
    }
})