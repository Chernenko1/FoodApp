import {useTheme} from '@react-navigation/native';
import {StyleProp, Text, TextProps, TextStyle} from 'react-native';

export interface IAppText extends TextProps {
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode;
  fontWeight?: 'regular' | 'medium' | 'light' | 'bold';
  size?: number;
}

export const AppText = ({
  style,
  children,
  size = 20,
  fontWeight = 'regular',
  ...rest
}: IAppText) => {
  const {colors} = useTheme();

  const font = {
    regular: 'Nunito-Regular',
    medium: 'Nunito-Medium',
    bold: 'Nunito-Bold',
    light: 'Nunito-Light',
  };

  return (
    <Text
      style={[
        {fontFamily: font[fontWeight], color: colors.text, fontSize: size},
        style,
      ]}
      {...rest}>
      {children}
    </Text>
  );
};
