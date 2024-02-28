import { useTheme } from '@react-navigation/native'
import react from 'react'
import { InputAccessoryViewProps, StyleSheet, TextComponent, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

interface Props {
    icon: string,
    value: string,
    otherProps: any
    error: any,
    touched: boolean | undefined
}

export const InputText = ({icon, value,error, touched, ...otherProps}: Props) => {
    const {colors} = useTheme()

    const validationColor = !touched ? colors.border : error ? '#FF5A5F' : '#223e4b';

    return (
<View
      style={[styles.mainView, {borderColor: validationColor,}]}
    >
      <View style={{ padding:5}}>
        <Icon name={icon} color={validationColor} size={16} />
      </View>
      <View style={{ flex: 1}}>
        <TextInput
          value={value}
          underlineColorAndroid="transparent"
          placeholderTextColor={colors.text}
          {...otherProps}
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