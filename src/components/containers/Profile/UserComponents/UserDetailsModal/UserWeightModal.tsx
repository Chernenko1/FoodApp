import {useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {Text, TextInput, View} from 'react-native';

import {styles} from './styles';
import {useAppDispatch, useAppSelector} from '../../../../../store/hooks';
import {ModalV} from '../../../../common/Modals/Modal';
import {AppText} from '../../../../common/AppText';
import {userApi} from '../../../../../services/apis/userAPI';
import {addWeight, updateDetails} from '../../../../../store/slices/userSlice';
import {formatDate} from 'utils/formDate';

interface Props {
  text: string;
  visible: boolean;
  closeModal: () => void;
}

export const UserWeightModal = ({text, visible, closeModal}: Props) => {
  const [value, setValue] = useState(text);

  const dispatch = useAppDispatch();
  const {colors} = useTheme();

  const {error, loading, addNewWeight} = userApi();

  const {_id} = useAppSelector(state => state.user.user);

  function handlePress() {
    addNewWeight(_id, +value);
    if (!loading && !error) {
      dispatch(updateDetails({type: 'weight', value}));
      dispatch(addWeight({day: formatDate(new Date()), weight: +value}));
      closeModal();
    } else if (!loading && error) {
      console.log(error);
    }
  }

  return (
    <ModalV visible={visible} closeModal={closeModal} onPress={handlePress}>
      <View style={styles.mainView}>
        <AppText style={[styles.titleText, {color: colors.text}]}>
          Ваш вес:{' '}
        </AppText>
        <View style={styles.inputView}>
          <TextInput
            style={[styles.input, {color: colors.text}]}
            value={value}
            onChangeText={text => setValue(text)}
            maxLength={3}
            keyboardType="numeric"
          />
          <Text style={[styles.input, {color: colors.text}]}>кг</Text>
        </View>
        {error && (
          <AppText style={styles.errorText}>
            Что-то пошло не так, попробуйте снова, если ошибка не исчезла
            напишите в поддержку
          </AppText>
        )}
      </View>
    </ModalV>
  );
};
