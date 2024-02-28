import { StyleSheet, Text, View } from "react-native"
import * as Progress from 'react-native-progress'
import { COLORS } from "../../../themes/COLORS"
import { AppText } from "../../components/AppText"

interface Props {
    count: number,
    maxCount: number,
    title: string
}

export const CBFU = ({count = 1, maxCount = 1, title}: Props) => {
    return (
        <View style={styles.mainView}>
            <View style={styles.cbfuView}>
                <AppText>{count + "/" + maxCount}</AppText>
                <Progress.Bar progress={count/maxCount} width={50} color={count < maxCount ? COLORS.orange : COLORS.red}/>
                <AppText>{title}</AppText>
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