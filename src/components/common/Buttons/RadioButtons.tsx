import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../../themes/COLORS';
import {AppText} from '../AppText';

interface Props {
  value?: string;
  status: boolean;
  onPress?: () => void;
}

export const RadioButton = ({value = '', status, onPress}: Props) => {
  return (
    <View style={styles.radioButtonView}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.radioButton}
        onPress={onPress}>
        <Icon
          name={status ? 'ellipse' : 'ellipse-outline'}
          size={24}
          color={status ? COLORS.orange : COLORS.black}
        />
        <AppText style={styles.text}>{value}</AppText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  radioButtonView: {
    // width: '100%'
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginLeft: 16,
  },
});
