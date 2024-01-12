import React from 'react';
import {Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { COLORS } from '../../../themes/COLORS';

export const FCCard = () => {
    const {width, height} = useWindowDimensions()

    return (
        <View style={[styles.container]}>
            <View style={styles.leftCard}>
                <View>
                    <Text style={styles.nameText}>Noodles aaaasssssssss</Text>
                    <Text style={styles.descText}>60 Dishes</Text>
                </View>
                <View>
                    <Image source={require('../../../../assets/images/noodles.png')} style={{width: width * 0.23, height: height * 0.15}}/>
                </View>
            </View>
            <View style={styles.rightCardsCont}>
                <View style={styles.rightCards}>
                    <View>
                        <Text style={styles.nameText}>Non-veg</Text>
                        <Text style={styles.descText}>50 Dishes</Text>
                    </View>

                    <View>
                        <Image source={require('../../../../assets/images/noodles.png')} style={{width: width * 0.15, height: height * 0.10}}/>
                    </View>
                </View>
                <View style={styles.rightCards}>
                    <View>
                        <Image source={require('../../../../assets/images/noodles.png')} style={{width: width * 0.15, height: height * 0.10}}/>
                    </View>
                    <View>
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
        marginTop: 15,
        justifyContent: 'space-between',
    },
    leftCard: {
        backgroundColor: COLORS.teal,
        borderRadius: 15,
        padding: 5,
        width: '50%',
    },
    rightCards: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLORS.purple,
        borderRadius: 15,
        padding: 5,
    },
    rightCardsCont :{
        flexDirection: 'column', 
        justifyContent:'space-between',
        width: '45%'
    },
    nameText: {
        fontSize: 18,
        fontFamily: 'Rubik-Medium',
        color:COLORS.black
    },
    descText: {
        fontSize: 13,
        fontFamily: 'Rubik-Regular'
    },
})