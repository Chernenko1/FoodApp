import {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {styles} from './styles';
import {useAppDispatch, useAppSelector} from '../../../../../store/hooks';
import {updateUserDetails} from '../../../../../services/apis/userAPI';
import {updateDetails} from '../../../../../store/slices/userSlice';
import {ModalV} from '../../../../common/Modals/Modal';
import {AppText} from '../../../../common/AppText';

interface Props {
  text: string;
  visible: boolean;
  closeModal: () => void;
}

export const UserHeightModal = ({text, visible, closeModal}: Props) => {
  const [value, setValue] = useState(text);

  const dispatch = useAppDispatch();
  const {colors} = useTheme();

  const {_id} = useAppSelector(state => state.user.user);

  function handlePress() {
    updateUserDetails({id: _id, type: 'height', data: value});
    dispatch(updateDetails({type: 'height', value}));
    closeModal();
  }

  return (
    <ModalV visible={visible} closeModal={closeModal} onPress={handlePress}>
      <View style={styles.mainView}>
        <AppText style={[styles.titleText, {color: colors.text}]}>
          Ваш рост:{' '}
        </AppText>
        <View style={styles.inputView}>
          <TextInput
            style={[styles.input, {color: colors.text}]}
            value={value}
            onChangeText={text => setValue(text)}
            maxLength={3}
            keyboardType="numeric"
          />
          <Text style={[styles.input, {color: colors.text}]}>см</Text>
        </View>
      </View>
    </ModalV>
  );
};
