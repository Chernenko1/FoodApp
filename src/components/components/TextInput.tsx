import react from 'react'
import { InputAccessoryViewProps, StyleSheet, TextComponent, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

interface Props {
    icon: string,
    otherProps: any
    error: any,
    touched: boolean | undefined
}

export const InputText = ({icon,error, touched, ...otherProps}: Props) => {
    const validationColor = !touched ? '#223e4b' : error ? '#FF5A5F' : '#223e4b';

    return (
<View
      style={[styles.mainView, {borderColor: validationColor,}]}
    >
      <View style={{ padding:5}}>
        <Icon name={icon} color={validationColor} size={16} />
      </View>
      <View style={{ flex: 1}}>
        <TextInput
          underlineColorAndroid="transparent"
          placeholderTextColor="rgba(34, 62, 75, 0.7)"
          {...otherProps}
          style={{padding: 2}}
        />
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 48,
        borderRadius: 8,
        borderWidth: StyleSheet.hairlineWidth,
        // marginBottom: 5,
    }
})