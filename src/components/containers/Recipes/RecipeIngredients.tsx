import {useTheme} from '@react-navigation/native';
import {Pressable, StyleSheet, View} from 'react-native';

import {LineInfoCard} from 'components/common/Cards/LineInfoCard';
import {COLORS} from 'themes/COLORS';

interface IRecipeIngredients {
  ingredients: {
    productId: {
      name: string;
      id: string;
    };
    quantity: string;
  }[];
}

export const RecipeIngredients = ({ingredients}: IRecipeIngredients) => {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      {ingredients.map((item, index) => (
        <Pressable
          style={[styles.productView, {backgroundColor: colors.card}]}
          key={index}>
          <LineInfoCard
            nameText={item.productId.name}
            infoText={item.quantity}
            key={item.productId.id}
          />
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    rowGap: 15,
  },
  productView: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
    elevation: 3,
  },
});
