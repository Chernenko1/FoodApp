import React, {useState} from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CreationParamList} from '../../screens/CreationStack';
import {createRecipe} from '../../http/recipeAPI';
import {COLORS} from '../../themes/COLORS';

type Navigation = NativeStackScreenProps<CreationParamList, 'StackCreation'>;

let recipe: Recipe = {};

export const Creation = ({navigation, route}: Navigation) => {
  const [stepCount, setStepCount] = useState(0);
  const [headerButton, setHeaderButton] = useState(true);

  const handleRecipeData = (data: any = {}) => {
    if (headerButton) setHeaderButton(!headerButton);
    recipe = Object.assign(recipe, data);
  };

  const handlePress = () => {
    const formData = new FormData();
    formData.append('name', recipe.name);
    formData.append('cookTime', recipe.cookTime);
    formData.append('service', recipe.service);
    formData.append('description', recipe.description);
    formData.append('instruction', JSON.stringify(recipe.instruction));
    formData.append('ingrediants', JSON.stringify(recipe.ingrediants));
    formData.append('category', JSON.stringify(recipe.category));
    formData.append('rating', '5.0');
    createRecipe(formData);
  };

  const showNextStep = () => {
    //    setHeaderButton(!headerButton)
    setStepCount(stepCount + 1);
  };

  return (
    <View>
      <Text>Not work</Text>
    </View>
    // <View style ={styles.container}>
    //        <View style={styles.headerContainer}>
    //             <Text style={styles.text}>Новый рецепт</Text>
    //             <HeaderButton  title="следующий шаг" disabled={headerButton} onPress={() => showNextStep()}/>
    //         </View>
    //         <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}>
    //             <RenderSteps handleRecipeData={handleRecipeData} params={route.params} stepCount = {stepCount}/>
    //         </ScrollView>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: Dimensions.get('screen').width * 0.3,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: -5,
    paddingVertical: 10,
  },
  text: {
    fontFamily: 'Rubik-Medium',
    fontSize: 20,
    color: COLORS.black,
  },
});
