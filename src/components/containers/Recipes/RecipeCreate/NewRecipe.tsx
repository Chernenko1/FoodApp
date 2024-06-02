import {useNavigation, useTheme} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';

import {TextButton} from 'components/common/Buttons/TextButton';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from 'themes/COLORS';
import {AppText} from 'components/common/AppText';
import {NewRecipeContext} from './NewRecipeContext';
import {RecipeBasicInfo} from './RecipeBasicInfo';
import {RecipeProducts} from './RecipeProducts';
import {RecipeCategories} from './RecipeCategories';
import {UpLoadRecipe} from './UpLoadRecipe';

export const NewRecipe = () => {
  const [product, setProduct] = useState<Recipe>({
    name: ' ',
    cookTime: 1,
    service: 1,
    description: ' ',
    ingredients: [],
    image: '',
    instruction: [],
    categories: [],
  });
  const [screenCount, setScreenCount] = useState(1);
  const [validate, setValidate] = useState(false);

  const {colors} = useTheme();
  const navigation = useNavigation();

  function nextScreen() {
    if (validate) {
      setScreenCount(prev => {
        setValidate(false);
        return prev + 1;
      });
    }
  }

  function previosScreen() {
    setScreenCount(prev => prev - 1);
  }

  function setBasicInfo(
    name: string,
    cookTime: number,
    service: number,
    description: string,
  ) {
    setProduct({...product, name, cookTime, service, description});
  }

  function setRecipeIngredients(ingredients: {id: string; name: string}[]) {
    setProduct({...product, ingredients});
  }

  function setRecipeCategories(categories: string[]) {
    setProduct({...product, categories});
  }

  function setImage(image: any) {
    setProduct({...product, image});
  }

  useEffect(() => {
    navigation.setOptions({
      header: () =>
        screenCount < 4 && (
          <View style={[styles.header, {backgroundColor: colors.card}]}>
            <Pressable onPress={previosScreen}>
              <Icon name="arrow-back-outline" size={30} color={COLORS.black} />
            </Pressable>
            <AppText style={styles.headerText}>
              Добавление нового рецепта
            </AppText>
            <TextButton
              title={screenCount !== 3 ? 'далее' : 'сохранить'}
              style={{
                fontSize: 20,
                color: validate ? COLORS.deepOrange : COLORS.gray,
              }}
              onPress={nextScreen}
            />
          </View>
        ),
    });
  }, [navigation, validate, screenCount]);

  useEffect(() => {
    if (screenCount === 0) {
      navigation.goBack();
    }
  }, [screenCount]);

  const SCREENS: Record<number, React.JSX.Element> = {
    1: (
      <RecipeBasicInfo
        setBasicInfo={setBasicInfo}
        setIsValid={setValidate}
        setImage={setImage}
      />
    ),
    2: (
      <RecipeProducts
        setRecipeIngredients={setRecipeIngredients}
        setIsValid={setValidate}
      />
    ),
    3: (
      <RecipeCategories
        setRecipeCategories={setRecipeCategories}
        setIsValid={setValidate}
      />
    ),
    4: <UpLoadRecipe />,
  };

  return (
    <NewRecipeContext.Provider value={product}>
      <View style={{flex: 1}}>{SCREENS[screenCount]}</View>
    </NewRecipeContext.Provider>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 5,
    height: 65,
  },
  headerText: {
    fontFamily: 'Rubik-Regular',
    width: '65%',
    textAlign: 'center',
    fontSize: 20,
  },
});
