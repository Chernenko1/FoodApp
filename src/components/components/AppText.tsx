import {useTheme} from '@react-navigation/native';
import {StyleProp, Text, TextProps, TextStyle} from 'react-native';

interface Props extends TextProps {
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode;
  fontWeight?: 'regular' | 'medium' | 'light';
}

export const AppText = ({
  style,
  children,
  fontWeight = 'regular',
  ...rest
}: Props) => {
  const {colors} = useTheme();

  const font = {
    regular: 'Rubik-Regular',
    medium: 'Rubik-Medium',
    light: 'Rubik-Light',
  };

  return (
    <Text
      style={[{fontFamily: font[fontWeight], color: colors.text}, style]}
      {...rest}>
      {children}
    </Text>
  );
};
