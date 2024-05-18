import {AppText} from 'components/common/AppText';
import {useContext, useEffect, useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from 'themes/COLORS';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {NewRecipeContext} from './NewRecipeContext';
import {createRecipe} from 'services/apis/recipeAPI';

type Navigation = NativeStackNavigationProp<HomeParamList>;

export const UpLoadRecipe = () => {
  const recipe = useContext(NewRecipeContext);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const navigation = useNavigation<Navigation>();

  useEffect(() => {
    createRecipe(recipe)
      .then(_ => {
        setLoading(false);
      })
      .catch(e => {
        setError(e), setLoading(false);
      });
  }, []);

  console.log(error);

  return (
    <View style={styles.container}>
      {loading && !error && (
        <View>
          <AppText style={styles.titleText}>
            Добавляем ваш рецепт, подождите немного
          </AppText>
        </View>
      )}

      {!loading && !error && (
        <View style={styles.container}>
          <Icon name={'checkmark-circle'} color={COLORS.deepOrange} size={30} />
          <AppText style={styles.titleText}>Рецепт добавлен</AppText>
          <AppText style={styles.additionalTitle}>
            Теперь вы можете найти его в поиске и добавить
          </AppText>
          <Pressable onPress={() => navigation.goBack()}>
            <AppText style={[styles.additionalTitle, {color: COLORS.orange}]}>
              Вернуться к поиску
            </AppText>
          </Pressable>
        </View>
      )}
      {!loading && error && (
        <View>
          <AppText style={styles.additionalTitle}>
            Похоже произошла ошибка, проверьте ваше подключение к сети и
            повторите попытку, если ошибка не исчезла -
            <AppText style={[styles.additionalTitle, {color: COLORS.orange}]}>
              сообщете нам
            </AppText>
          </AppText>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 50,
  },
  innerContainer: {},
  titleText: {
    textAlign: 'center',
    fontFamily: 'Rubik-Medium',
    fontSize: 24,
  },
  additionalTitle: {
    textAlign: 'center',
    fontFamily: 'Rubik-Rubik',
    fontSize: 20,
  },
});
