import React, {ReactNode} from 'react';
import {View, Modal, StyleSheet} from 'react-native';
import {COLORS} from '../../themes/COLORS';
import {Button} from './Button';
import {useTheme} from '@react-navigation/native';

interface Props {
  children: ReactNode;
  visible: boolean;
  closeModal: () => void;
  onPress: () => void;
}

export const ModalV = ({children, visible, closeModal, onPress}: Props) => {
  const {colors} = useTheme();

  return (
    <Modal visible={visible} transparent={true} onRequestClose={closeModal}>
      <View style={styles.centeredModal}>
        <View style={[styles.modalView, {backgroundColor: colors.card}]}>
          {children}
          <Button title="Сохранить" onPress={onPress} color={COLORS.orange} />
          <Button textColor={colors.text} title="Отмена" onPress={closeModal} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '80%',
    padding: 35,
    borderRadius: 15,
    elevation: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    rowGap: 10,
  },
  modalCategories: {
    marginBottom: 10,
  },
  buttonView: {
    rowGap: 10,
  },
});
