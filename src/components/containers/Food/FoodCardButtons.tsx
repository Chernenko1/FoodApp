import {Button} from 'components/common/Buttons/Button';
import {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {COLORS} from 'themes/COLORS';

interface IFoodCardButtons {
  action: 'add' | 'update';
  disabled: boolean;
  onPressAdd?: () => void;
  onPressDelete?: () => void;
  onPressUpdate?: () => void;
}

export const FoodCardButtons = ({
  action,
  disabled,
  onPressAdd,
  onPressDelete,
  onPressUpdate,
}: IFoodCardButtons) => {
  return (
    <View style={styles.buttonView}>
      {action === 'add' ? (
        <View style={styles.singleButtonView}>
          <Button
            disabled={disabled}
            title="Добавить"
            color={COLORS.orange}
            textColor={COLORS.white}
            onPress={onPressAdd}
          />
        </View>
      ) : (
        <>
          <Button
            style={styles.button}
            title="Удалить"
            disabled={disabled}
            color={COLORS.red}
            textColor={COLORS.white}
            onPress={onPressDelete}
          />
          <Button
            style={styles.button}
            title="Сохранить"
            disabled={disabled}
            color={COLORS.orange}
            textColor={COLORS.white}
            onPress={onPressUpdate}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  singleButtonView: {
    flex: 1,
  },
  button: {
    width: '40%',
  },
});
