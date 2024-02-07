import { StyleSheet, Text, View } from "react-native"
import * as Progress from 'react-native-progress'
import { COLORS } from "../../../themes/COLORS"

interface Props {
    count: number,
    maxCount: number,
    title: string
}

export const CBFU = ({count = 1, maxCount = 1, title}: Props) => {
    return (
        <View style={styles.mainView}>
            <View style={styles.cbfuView}>
                <Text>{count + "/" + maxCount}</Text>
                <Progress.Bar progress={count/maxCount} width={50} color={count < maxCount ? COLORS.orange : COLORS.red}/>
                <Text>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        
    },
    cbfuView: {
        alignItems: 'center',
    }
})