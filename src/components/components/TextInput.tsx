import { useTheme } from '@react-navigation/native'
import { StyleProp, TextInputProps, TextStyle, ViewStyle } from 'react-native'
import { StyleSheet, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { COLORS } from '../../themes/COLORS'

interface Props extends TextInputProps {
    value?: string,
    error?: any,
    touched?: boolean | undefined,
    style?: StyleProp<ViewStyle & TextStyle>
    height?: number 
}

export const InputText = ({value,error,style, touched, height = 40, ...restProps}: Props) => {
    const {colors} = useTheme()

    const validationColor = !touched ? COLORS.black : error ? '#FF5A5F' : COLORS.orange;

    return (
        <View style={[styles.mainView, {borderColor: validationColor, height}]}>
          <View style={{}}>
            <TextInput
              value={value}
              underlineColorAndroid="transparent"
              placeholderTextColor={colors.text}
              {...restProps}
              style={[{padding: 2, color: colors.text,fontSize: 20, borderColor: validationColor}, style]}
            />
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        // marginBottom: 5,
    }
})