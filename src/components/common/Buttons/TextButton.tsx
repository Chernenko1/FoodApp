import {Pressable, StyleProp, StyleSheet, TextStyle} from 'react-native';
import {AppText} from '../AppText';
import {useState} from 'react';
import {COLORS} from 'themes/COLORS';

interface Props {
  title: string;
  onPress?: () => void;
  size?: number;
  color?: string;
  style?: StyleProp<TextStyle>;
}

export const TextButton = ({
  title,
  onPress,
  style,
  size = 20,
  color = COLORS.orange,
}: Props) => {
  const [pressIn, setPressIn] = useState(false);

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => setPressIn(true)}
      onPressOut={() => setPressIn(false)}>
      <AppText
        style={[style, {color}, pressIn && {color: COLORS.lightGray}]}
        fontWeight="regular"
        size={size}>
        {title}
      </AppText>
    </Pressable>
  );
};
