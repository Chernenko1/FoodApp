import {Pressable, StyleSheet, View} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {AppText} from './AppText';
import {useTheme} from '@react-navigation/native';

interface IInputSearch {
  placeholder?: string;
  onPress?: () => void;
}

export const SearchInput = ({
  onPress,
  placeholder = 'Введите текст',
}: IInputSearch) => {
  const {colors} = useTheme();
  return (
    <Pressable style={styles.searchContainer} onPress={onPress}>
      <Icon name="search" size={20} color={colors.text} />
      <AppText>{placeholder}</AppText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
    paddingVertical: 7,
    paddingLeft: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
});
