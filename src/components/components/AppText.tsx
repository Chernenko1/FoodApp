import { useTheme } from "@react-navigation/native";
import { StyleProp, Text, TextComponent, TextStyle, View } from "react-native";

interface Props {
    style?: StyleProp<TextStyle>,
    children?: React.ReactNode,
    fontWeight?: 'regular' | 'medium' | 'light'
}

export const AppText =  ({style, children, fontWeight = 'regular'}: Props) =>{

    const {colors} = useTheme()

    const font = {
        'regular': 'Rubik-Regular',
        'medium': 'Rubik-Medium',
        'light': 'Rubik-Light'
    }

    return (
        <Text style={[{textAlign: 'center', fontFamily: font[fontWeight], color:colors.text}, style]}>{children}</Text>
    )
}
