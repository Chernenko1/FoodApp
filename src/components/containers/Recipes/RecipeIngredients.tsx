import {useTheme} from '@react-navigation/native';
import {Pressable, StyleSheet, View} from 'react-native';

import {LineInfoCard} from 'components/common/Cards/LineInfoCard';
import {COLORS} from 'themes/COLORS';

interface IRecipeIngredients {
  ingredients: {
    id: {
      name: string;
      id: string;
    };
    weight: string;
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
            nameText={item.id.name}
            infoText={item.weight}
            key={item.id.id}
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
