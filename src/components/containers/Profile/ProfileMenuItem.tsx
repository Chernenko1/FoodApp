import {Pressable, StyleSheet, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../../themes/COLORS';
import {AppText} from '../../common/AppText';

interface Props {
  onPress: () => void;
  title: string;
  icon: string;
}

export const ProfileMenuItem = ({title, icon, onPress}: Props) => {
  const {colors} = useTheme();

  return (
    <Pressable
      style={[styles.mainView, {backgroundColor: colors.card}]}
      onPress={onPress}>
      <View style={styles.leftView}>
        <Icon name={icon} size={20} color={COLORS.orange} />
        <AppText style={styles.textTitle} fontWeight="light">
          {title}
        </AppText>
      </View>
      <View>
        <Icon name="chevron-forward-outline" size={20} color={colors.text} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
    elevation: 2,
  },
  leftView: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 15,
  },
  textTitle: {
    fontSize: 18,
  },
});
