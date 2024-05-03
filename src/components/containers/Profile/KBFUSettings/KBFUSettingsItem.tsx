import {StyleSheet, TextInput, View} from 'react-native';
import {AppText} from '../../../common/AppText';
import {COLORS} from '../../../../themes/COLORS';

interface Props {
  title: string;
  value: string;
  onChangeText: (text: string) => void;
}

export const KBFUSsettingsItem = ({title, value, onChangeText}: Props) => {
  return (
    <View style={styles.inputView}>
      <AppText style={styles.inputText}>{title}</AppText>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={text => onChangeText(text)}
        keyboardType="numeric"
        maxLength={5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    fontSize: 20,
    backgroundColor: COLORS.lightGray,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderRadius: 1,
    minWidth: '20%',
  },
  inputText: {
    fontSize: 24,
    color: COLORS.black,
  },
});
