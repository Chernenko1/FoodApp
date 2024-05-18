import {Modal, Pressable, StyleSheet, View} from 'react-native';
import {AppText} from '../AppText';
import {useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {TextButton} from '../Buttons/TextButton';

interface IMealTypesModal {
  closeModal: () => void;
  onSavePress: (meal: MealType) => void;
  visible: boolean;
}

export const MealTypesModal = ({
  onSavePress,
  closeModal,
  visible,
}: IMealTypesModal) => {
  const {colors} = useTheme();

  function setMeal(meal: MealType) {
    onSavePress(meal);
    closeModal();
  }

  return (
    <Modal visible={visible} transparent={true} onRequestClose={closeModal}>
      <View style={styles.centeredModal}>
        <View style={[styles.modalView, {backgroundColor: colors.card}]}>
          <AppText fontWeight="bold" size={24}>
            Выберите прием пищи
          </AppText>
          <TextButton title="Завтрак" onPress={() => setMeal('breakfast')} />
          <TextButton title="Обед" onPress={() => setMeal('lunch')} />
          <TextButton title="Ужин" onPress={() => setMeal('dinner')} />
          <TextButton title="Перекус" onPress={() => setMeal('snack')} />
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
  boxView: {
    flexDirection: 'row',
    columnGap: 10,
  },
});
