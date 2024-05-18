import {useTheme} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {AppText} from 'components/common/AppText';
import Icon from 'react-native-vector-icons/Ionicons';
import {searchProduct} from 'services/apis/searchAPI';
import {ProductNotFound} from 'components/containers/Search/ProductNotFound';

type NavProps = NativeStackScreenProps<
  RecipesParamList,
  'SearchProductForRecipe'
>;

export const SearchProductForRecipe = ({navigation, route}: NavProps) => {
  const [value, setValue] = useState('');
  const [searchAnswer, setSearchAnswer] = useState<SearchAnswer[]>([]);

  const {colors} = useTheme();

  const nextScreen = (id: string) => {
    navigation.navigate('ProductAdd', {
      id,
    });
  };
  useEffect(() => {
    if (value) {
      searchProduct(value, 'food')
        .then((data: SearchAnswer[]) => setSearchAnswer(data))
        .catch(e => console.log(e));
    }
  }, [value]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerInput}>
        <Icon
          name="arrow-back-outline"
          size={30}
          color={colors.text}
          onPress={() => navigation.goBack()}
        />
        <TextInput
          style={[styles.input, {borderColor: colors.border}]}
          value={value}
          onChangeText={text => setValue(text)}
          multiline={true}
        />
      </View>
      <KeyboardAvoidingView behavior="height">
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.containerAnswer}>
            {searchAnswer.map(item => (
              <Pressable key={item._id} onPress={() => nextScreen(item._id)}>
                <View style={styles.containerText}>
                  <AppText style={styles.text}>{item.name}</AppText>
                </View>
              </Pressable>
            ))}
          </View>
        </TouchableWithoutFeedback>
        <ProductNotFound productType="food" />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
    marginTop: 10,
  },
  containerAnswer: {
    rowGap: 5,
    marginTop: 15,
  },
  containerText: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderBottomWidth: 0.2,
    borderRadius: 2,
  },
  input: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 0.5,
    borderRadius: 10,
    fontSize: 20,
    fontFamily: 'Rubik-Regular',
    width: Dimensions.get('screen').width * 0.8,
  },
  text: {
    fontSize: 18,
  },
});
