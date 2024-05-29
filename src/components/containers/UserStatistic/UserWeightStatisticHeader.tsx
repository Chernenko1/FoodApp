import {useTheme} from '@react-navigation/native';
import {StyleSheet, TextInput, View, Keyboard} from 'react-native';

import {TextButton} from 'components/common/Buttons/TextButton';
import {AppText} from 'components/common/AppText';
import {COLORS} from 'themes/COLORS';
import {useState} from 'react';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {userApi} from 'services/apis/userAPI';
import {addWeight, updateDetails} from 'store/slices/userSlice';
import {formatDate} from 'utils/formDate';

export const UserWeightStatisticHeader = () => {
  const _id = useAppSelector(state => state.user.user._id);
  const weight = useAppSelector(state => state.user.user.details.weight);

  const [value, setValue] = useState(String(weight));

  const {colors} = useTheme();
  const dispatch = useAppDispatch();

  const {error, loading, addNewWeight} = userApi();

  function handlePress() {
    addNewWeight(_id, +value);
    if (!loading && !error) {
      dispatch(updateDetails({type: 'weight', value}));
      dispatch(addWeight({day: formatDate(new Date()), weight: +value}));
    } else if (!loading && error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={[styles.weightInputView, {backgroundColor: colors.card}]}>
        <AppText style={styles.weightInputTilte} fontWeight="medium" size={35}>
          Ваш вес
        </AppText>
        <TextInput
          value={value}
          onChangeText={text => setValue(text)}
          style={styles.input}
          keyboardType="numeric"
          onBlur={() => Keyboard.dismiss()}
        />
        <TextButton
          title="Сохранить"
          style={styles.weightInputButton}
          size={24}
          onPress={handlePress}
        />
      </View>
      <AppText
        style={[styles.weightInputTilte, {paddingVertical: 10}]}
        size={24}
        fontWeight="medium">
        Ваши изменения в весе
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {paddingTop: 10},
  weightInputView: {
    paddingVertical: 10,
    rowGap: 10,
    borderRadius: 15,
    elevation: 3,
    alignItems: 'center',
  },
  input: {
    textAlign: 'center',
    width: 150,
    fontSize: 50,
    borderBottomColor: COLORS.deepOrange,
    borderBottomWidth: 1,
  },
  weightInputButton: {
    textAlign: 'center',
    color: COLORS.deepOrange,
  },
  weightInputTilte: {
    textAlign: 'center',
  },
});
