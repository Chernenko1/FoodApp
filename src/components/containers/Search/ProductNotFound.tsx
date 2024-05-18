import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Pressable, StyleSheet, View} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../../themes/COLORS';
import {AppText} from '../../common/AppText';

type Navigation = NativeStackNavigationProp<HomeParamList, 'ProductCreate'>;

interface IProsuctNotFound {
  productType: ProductType;
}

export const ProductNotFound = ({productType}: IProsuctNotFound) => {
  const navigation = useNavigation<Navigation>();

  function navigateToProductCreating() {
    navigation.navigate('ProductCreate');
  }

  return (
    <View style={styles.container}>
      <AppText style={styles.titleText}>
        Нет нужного продукта? Добавьте свой
      </AppText>
      <Pressable style={styles.button} onPress={navigateToProductCreating}>
        <AppText style={styles.buttonText}>
          Добавить новый {productType}
        </AppText>
        <Icon name="add-outline" size={20} color={COLORS.deepOrange} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Rubik-Medium',
    color: COLORS.deepOrange,
  },
  titleText: {
    fontSize: 16,
    fontFamily: 'Rubik-Medium',
  },
});
