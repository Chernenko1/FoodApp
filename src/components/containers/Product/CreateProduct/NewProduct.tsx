import {useNavigation, useTheme} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';

import {TextButton} from 'components/common/Buttons/TextButton';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from 'themes/COLORS';
import {BasicInfo} from './BasicInfo';
import {ProductCreateContext} from './ProductCreateContext';
import {ProductMinerals} from './ProductMinerals';
import {ProductServing} from './ProductServing';
import {ProductVitamins} from './ProductVitamins';
import {AppText} from 'components/common/AppText';
import {UpLoadProduct} from './UpLoadProduct';

export const NewProduct = () => {
  const [product, setProduct] = useState<Product>({
    name: '',
    weight: 100,
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

  function setBasicInfo(name: string, weight: number) {
    setProduct({...product, name, weight});
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
      header: () =>
        screenCount < 5 && (
          <View style={[styles.header, {backgroundColor: colors.card}]}>
            <Pressable onPress={previosScreen}>
              <Icon name="arrow-back-outline" size={30} color={COLORS.black} />
            </Pressable>
            <AppText style={styles.headerText}>
              'Добавление нового продукта'
            </AppText>
            <TextButton
              title={screenCount !== 4 ? 'далее' : 'сохранить'}
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
    1: <BasicInfo setBasicInfo={setBasicInfo} setIsValid={setValidate} />,
    2: (
      <ProductServing
        setProductServing={setProductServing}
        setIsValid={setValidate}
      />
    ),
    3: (
      <ProductVitamins
        setProductVitamins={setProductVitamins}
        setIsValid={setValidate}
      />
    ),
    4: (
      <ProductMinerals
        setProductMinerals={setProductMinerals}
        setIsValid={setValidate}
      />
    ),
    5: <UpLoadProduct />,
  };

  return (
    <ProductCreateContext.Provider value={product}>
      <View style={{flex: 1}}>{SCREENS[screenCount]}</View>
    </ProductCreateContext.Provider>
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
