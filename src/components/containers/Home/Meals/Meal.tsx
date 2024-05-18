import {useNavigation, useTheme} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {Pressable, StyleSheet, View} from 'react-native';

import {COLORS} from 'themes/COLORS';
import {AppText} from 'components/common/AppText';
import {ButtonIcon} from 'components/common/Buttons/ButtonIcon';

interface Props {
  title: string;
  mealType: MealType;
  kcal: number;
}

type Navigation = NativeStackNavigationProp<HomeParamList, 'MealInfo'>;

export const Meal = ({title, kcal = 0, mealType}: Props) => {
  const {colors} = useTheme();

  const navigation = useNavigation<Navigation>();

  function navigateToSearch() {
    navigation.navigate('Search', {
      mealType,
      productType: 'food',
    });
  }

  return (
    <View style={[styles.mainView, {backgroundColor: colors.card}]}>
      <Pressable
        onPress={() =>
          navigation.navigate('MealInfo', {headerTitle: title, mealType})
        }>
        <View style={styles.frameView}>
          <AppText style={styles.titleText} fontWeight="medium">
            {title}
          </AppText>
          <AppText style={styles.kcalText}>
            Употреблено
            <AppText style={[{color: colors.primary}]}> {kcal} </AppText>
            ккал
          </AppText>
        </View>
      </Pressable>
      <ButtonIcon
        name="add-outline"
        size={40}
        backgroundColor={COLORS.lightGray}
        onPress={navigateToSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 15,
    elevation: 3,
  },
  frameView: {},
  iconView: {
    backgroundColor: COLORS.lightGray,
    padding: 5,
    borderRadius: 10,
  },
  titleText: {
    fontSize: 24,
  },
  kcalText: {
    fontSize: 18,
  },
});
