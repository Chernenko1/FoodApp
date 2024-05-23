import {Pressable, StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {AppText} from '../AppText';
import {COLORS} from '../../../themes/COLORS';
import {ReactNode, useState} from 'react';

interface Props {
  title?: string;
  onPress?: () => void;
  color?: string;
  textColor?: string;
  size?: number;
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
  disabled?: boolean;
}

export const Button = ({
  title,
  onPress,
  color = COLORS.orange,
  textColor,
  size = 18,
  style,
  children,
  disabled = false,
}: Props) => {
  const [pressIn, setPressIn] = useState(false);

  return (
    <Pressable
      style={[
        styles.pressable,
        {backgroundColor: disabled ? COLORS.gray : color},
        style,
      ]}
      onPress={onPress}
      onPressIn={() => setPressIn(true)}
      onPressOut={() => setPressIn(false)}
      disabled={disabled}>
      <AppText
        size={size}
        style={[{color: pressIn ? COLORS.lightGray : textColor}, style]}>
        {title}
      </AppText>
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 7,
    borderRadius: 5,
  },
});
