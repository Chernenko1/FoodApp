import { useTheme } from '@react-navigation/native'
import { TextInputProps } from 'react-native'
import { StyleSheet, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

interface Props extends TextInputProps {
    value?: string,
    error?: any,
    touched: boolean | undefined
}

export const InputText = ({value,error, touched, ...restProps}: Props) => {
    const {colors} = useTheme()

    const validationColor = !touched ? colors.border : error ? '#FF5A5F' : '#223e4b';

    return (
<View
      style={[styles.mainView, {borderColor: validationColor,}]}
    >
      <View style={{ flex: 1}}>
        <TextInput
          value={value}
          underlineColorAndroid="transparent"
          placeholderTextColor={colors.text}
          {...restProps}
          style={{padding: 2, color: colors.text}}
        />
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        borderRadius: 8,
        borderWidth: 1,
        // marginBottom: 5,
    }
})