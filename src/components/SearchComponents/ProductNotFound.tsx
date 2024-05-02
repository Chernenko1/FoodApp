import {Pressable, StyleSheet, View} from 'react-native';
import {AppText} from '../components/AppText';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../themes/COLORS';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeParamList} from '../../screens/HomeStack';
import {useNavigation} from '@react-navigation/native';

type Navigation = NativeStackNavigationProp<HomeParamList, 'CreateProduct'>;

export const ProductNotFound = () => {
  const navigation = useNavigation<Navigation>();

  function navigateToProductCreating() {
    navigation.navigate('CreateProduct');
  }

  return (
    <View style={styles.container}>
      <AppText style={styles.titleText}>
        Нет нужного продукта? Добавьте свой
      </AppText>
      <Pressable style={styles.button} onPress={navigateToProductCreating}>
        <AppText style={styles.buttonText}>Добавить продукт</AppText>
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
