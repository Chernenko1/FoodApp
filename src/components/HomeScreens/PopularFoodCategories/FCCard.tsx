import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { COLORS } from '../../../themes/COLORS';

export const FCCard = () => {
    const {width, height} = useWindowDimensions()

    return (
        <View style={styles.container}>
            <View style={styles.firstCard}>
                <View style={[styles.textContCol, {width: width * 0.45, height: height * 0.1}]}>
                    <Text style={styles.nameText}>Noodles aaaasssssssss</Text>
                    <Text style={styles.descText}>60 Dishes</Text>
                </View>
                    <Image source={require('../../../../assets/images/noodles.png')} style={styles.imageCol}/>
            </View>
            <View style={{flexDirection: 'column', justifyContent:'space-between'}}>
                <View style={[styles.rowCard, {width: width * 0.4 ,height: height * 0.12}]}>
                    <View style={styles.textCont}>
                        <Text style={styles.nameText}>Non-veg</Text>
                        <Text style={styles.descText}>50 Dishes</Text>
                    </View>
                    <Image source={require('../../../../assets/images/noodles.png')} style={styles.imageSecond}/>
                </View>
                <View style={[styles.rowCard, {width: width * 0.4 ,height: height * 0.12}]}>
                    <Image source={require('../../../../assets/images/noodles.png')} style={styles.imageThird}/>
                    <View style={styles.textCont}>
                        <Text style={styles.nameText}>Soup</Text>
                        <Text style={styles.descText}>40 Dishes</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center'
        marginTop: 20
    },
    firstCard: {
        backgroundColor: COLORS.teal,
        borderRadius: 15,
    },
    rowCard: {
        backgroundColor: COLORS.purple,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageCol: {
        width: 150,
        height: 150,
        left: -17,
        top: 11
    },
    imageSecond: {
        width: 70,
        height: 70,
        left: -2
    },
    imageThird: {
        width: 70,
        height: 70,
        left: -8,

    },
    nameText: {
        fontSize: 20,
        fontFamily: 'Rubik-Medium',
        color:'black'
    },
    descText: {
        fontSize: 15,
        fontFamily: 'Rubik-Regular'
    },
    textCont: {
        marginHorizontal: 10,
        marginTop: 10,
        justifyContent: 'center'
    },
    textContCol: {
        top: 10,
        left: 10
    }
})