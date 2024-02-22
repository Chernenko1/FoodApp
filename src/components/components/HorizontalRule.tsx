import React from "react";
import { StyleSheet, View } from "react-native";

interface Props {
    width?: string
}

export const HorizontalRule = ({width = '100%'}: Props) => {
    return (
        <View style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }}
        />
    )
}