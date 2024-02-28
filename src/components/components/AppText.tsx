import { StyleProp, Text, TextComponent, TextStyle, View } from "react-native";

interface Props {
    style?: StyleProp<TextStyle>,
    children?: React.ReactNode,
    fontWeight?: 'regular' | 'medium' | 'light'
}

export const AppText =  ({style, children, fontWeight = 'regular'}: Props) =>{

    let font = {
        'regular': 'Rubik-Regular',
        'medium': 'Rubik-Medium',
        'light': 'Rubik-Light'
    }

    return (
        <Text style={[style, {fontFamily: font[fontWeight]}]}>{children}</Text>
    )
}
