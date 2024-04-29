import {Pressable, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../themes/COLORS';
import Icon from 'react-native-vector-icons/Ionicons';
import {ButtonIcon} from '../components/ButtonIcon';
import {deleteProducFromMeal} from '../../http/mealAPI';
import {memo, useCallback, useEffect} from 'react';
import {AppText} from '../components/AppText';
import {useTheme} from '@react-navigation/native';

interface Props {
  productName: string;
  kcal: number;
  productQuantity: string;
  productId: string;
  onCardPress: () => void;
  onIconPress: () => void;
}

export const ProductCard = ({
  productName,
  productQuantity,
  kcal,
  productId,
  onCardPress,
  onIconPress,
}: Props) => {
  const {colors} = useTheme();

  return (
    <Pressable
      style={[styles.mainView, {backgroundColor: colors.card}]}
      onPress={onCardPress}>
      <View style={styles.textView}>
        <AppText style={[styles.productNameText]} fontWeight="medium">
          {productName}
        </AppText>
        <AppText style={styles.productInfoText}>{productQuantity} г</AppText>
        <AppText style={styles.productInfoText}>{kcal} ккал</AppText>
      </View>
      <ButtonIcon
        name="close-outline"
        size={30}
        backgroundColor={COLORS.lightGray}
        onPress={onIconPress}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 15,
    elevation: 3,
  },
  textView: {
    alignItems: 'flex-start',
  },
  productNameText: {
    fontSize: 20,
  },
  productInfoText: {
    fontSize: 18,
  },
});
