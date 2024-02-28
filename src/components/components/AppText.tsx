import { StyleProp, Text, TextComponent, TextStyle, View } from "react-native";

interface Props {
    style?: StyleProp<TextStyle>,
    children?: React.ReactNode,
    fontWeight: 'regular' | 'medium'
}

export function AppText ({style, children, fontWeight = 'regular'}: Props) {

    let font = {
        'regular': 'Rubik-Regular',
        'medium': 'Rubik-Medium'
    }

    return (
        <Text style={[style, {fontFamily: font[fontWeight]}]}>{children}</Text>
    )
}
