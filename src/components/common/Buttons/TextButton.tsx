import {Pressable, StyleProp, StyleSheet, TextStyle} from 'react-native';
import {AppText} from '../AppText';

interface Props {
  title: string;
  onPress?: () => void;
  color?: string;
  style?: StyleProp<TextStyle>;
}

export const TextButton = ({title, onPress, style}: Props) => {
  return (
    <Pressable onPress={onPress}>
      <AppText style={[styles.text, style]} fontWeight="regular">
        {title}
      </AppText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
  },
});
