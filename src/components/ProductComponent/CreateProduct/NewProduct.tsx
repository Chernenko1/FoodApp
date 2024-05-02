import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {HomeParamList} from '../../../screens/HomeStack';
import {COLORS} from '../../../themes/COLORS';
import {TextButton} from '../../components/TextButton';
import {BasicInfo} from './BasicInfo';
import {ProductCreateContext} from './ProductCreateContext';
import {ProductMinerals} from './ProductMinerals';
import {ProductServing} from './ProductServing';
import {ProductVitamins} from './ProductVitamins';
import {createProduct} from '../../../http/productAPI';

type Navigation = NativeStackScreenProps<HomeParamList, 'CreateProduct'>;

export const NewProduct = ({navigation}: Navigation) => {
  const [product, setProduct] = useState<Product>({
    name: '',
    quantity: 100,
    nutrients: {
      calories: '0',
      protein: '0',
      fat: '0',
      carbohydrates: '0',
      water: '0',
      dietaryFiber: '0',
    },
    vitamins: {
      B1: '0',
      B2: '0',
      B3: '0',
      B5: '0',
      B6: '0',
      B7: '0',
      B9: '0',
      B12: '0',
      C: '0',
      A: '0',
      D: '0',
      E: '0',
      K: '0',
    },
    minerals: {
      Mn: '0',
      Fe: '0',
      NaCL: '0',
      Mg: '0',
      P: '0',
      Ca: '0',
      Na: '0',
      Zn: '0',
      Cu: '0',
      I: '0',
      Se: '0',
      Cr: '0',
      K: '0',
      Mo: '0',
    },
  });
  const [screenCount, setScreenCount] = useState(1);

  function nextScreen() {
    setScreenCount(prev => {
      if (prev !== 4) {
        return prev + 1;
      } else {
        createProduct(product)
          .then(data => console.log(data))
          .catch(error => console.log(error));
        return prev;
      }
    });
  }

  function previosScreen() {
    setScreenCount(prev => prev - 1);
  }

  function setBasicInfo(name: string) {
    setProduct({...product, name});
  }

  function setProductServing({
    calories,
    carbohydrates,
    fat,
    protein,
    water,
    dietaryFiber,
  }: Nutrients) {
    setProduct({
      ...product,
      nutrients: {calories, carbohydrates, fat, protein, water, dietaryFiber},
    });
  }

  function setProductVitamins(vitamins: Vitamins) {
    setProduct({...product, vitamins});
  }

  function setProductMinerals(minerals: Minerals) {
    setProduct({...product, minerals});
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TextButton
          title={screenCount !== 4 ? 'далее' : 'сохранить'}
          onPress={nextScreen}
        />
      ),
      headerLeft: () => (
        <Pressable onPress={previosScreen}>
          <Icon name="arrow-back-outline" size={24} color={COLORS.black} />
        </Pressable>
      ),
      headerTitle: 'Добавление нового продукта',
    });
  }, [navigation]);

  useEffect(() => {
    if (screenCount === 0) {
      navigation.goBack();
    }
  }, [screenCount]);

  const SCREENS: Record<number, React.JSX.Element> = {
    1: <BasicInfo setBasicInfo={setBasicInfo} />,
    2: <ProductServing setProductServing={setProductServing} />,
    3: <ProductVitamins setProductVitamins={setProductVitamins} />,
    4: <ProductMinerals setProductMinerals={setProductMinerals} />,
  };
  return (
    <ProductCreateContext.Provider value={product}>
      <View>{SCREENS[screenCount]}</View>
    </ProductCreateContext.Provider>
  );
};
