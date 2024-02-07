import React from "react";
import { Text, View } from "react-native";
import { PRHeader } from "./PRHeader";
import { FCCard } from "./FCCard";

export const PopularFC = () => {
    return (
        <View style= {{flex: 5}}>
            <PRHeader />
            <FCCard />
        </View>
    )
}