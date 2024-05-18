import {useContext, useEffect, useState} from 'react';
import {View} from 'react-native';

import {NewRecipeContext} from './NewRecipeContext';
import {AppText} from 'components/common/AppText';
import {fetchRecipeCategories} from 'services/apis/recipeCategoriesAPI';
import {CheckBox} from 'components/common/Buttons/CheckBox';

interface IRecipeCategories {
  setRecipeCategories: (category: string[]) => void;
  setIsValid: (isValid: boolean) => void;
}

export const RecipeCategories = ({
  setIsValid,
  setRecipeCategories,
}: IRecipeCategories) => {
  const {categories} = useContext(NewRecipeContext);

  const [fetchCategories, setFetchCategories] = useState(categories);

  useEffect(() => {
    fetchRecipeCategories().then(data => setFetchCategories(data));
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [categories]);

  function addToCategories(id: string) {
    setRecipeCategories([...categories, id]);
  }

  function deleteFromCategories(id: string) {
    const filterCategories = categories.filter(item => item !== id);
    setRecipeCategories(filterCategories);
  }

  return (
    <View>
      <AppText>Выберите категории вашего рецепта</AppText>
      {fetchCategories.map(item => (
        <View key={item._id}>
          <CheckBox
            text={item.name}
            checked={categories.includes(item._id)}
            onPress={() => {
              categories.includes(item._id)
                ? deleteFromCategories(item._id)
                : addToCategories(item._id);
            }}
          />
        </View>
      ))}
    </View>
  );
};
