import {AppText} from 'components/common/AppText';
import {StyleSheet, View} from 'react-native';

interface IInputField {
  title: string;
  children: React.ReactNode;
}
export const InputField = ({title, children}: IInputField) => {
  return (
    <View style={styles.inputContainer}>
      <AppText style={styles.inputTitle}>{title}</AppText>
      <View style={styles.inputInfo}>
        {children}
        <AppText style={styles.weightText}>г</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputTitle: {
    fontSize: 20,
    fontFamily: 'Rubik-Regular',
    flexWrap: 'wrap',
  },
  inputContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
  },
  inputInfo: {
    flexDirection: 'row',
  },
  weightText: {
    fontFamily: 'Rubik-Regular',
    fontSize: 20,
  },
});
