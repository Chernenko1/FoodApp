import {useTheme} from '@react-navigation/native';
import {useContext, useEffect, useState} from 'react';
import {StyleSheet, View, Image, ScrollView} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import * as Yup from 'yup';

import {NewRecipeContext} from './NewRecipeContext';
import {useFormik} from 'formik';
import {AppText} from 'components/common/AppText';
import {AppTextInput} from 'components/common/Inputs/AppTextInput';
import {Button} from 'components/common/Buttons/Button';

interface IRecipeBasicInfo {
  setBasicInfo: (
    name: string,
    cookTime: number,
    service: number,
    description: string,
  ) => void;
  setImage: (image: any) => void;
  setIsValid: (isValid: boolean) => void;
}

export const RecipeBasicInfo = ({
  setBasicInfo,
  setIsValid,
  setImage,
}: IRecipeBasicInfo) => {
  const [imageUri, setImageUri] = useState(null);

  const selectImage = async () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    await launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = {uri: response.assets[0].uri};
        setImageUri(source.uri);
        setImage(source.uri);
        // Add the selected image to your formatData
      }
    });
  };

  const context = useContext(NewRecipeContext);

  const BasicInfoSchema = Yup.object().shape({
    name: Yup.string().min(1).max(100).required('Поле не может быть пустым'),
    cookTime: Yup.number()
      .min(0.01, 'Не может быть меньше 0')
      .max(6000, 'Слишком большое значение')
      .required('Поле не может быть пустым'),
    service: Yup.number()
      .min(1, 'Не может быть меньше 1')
      .max(100, 'Слишком большое значение')
      .required('Поле не может быть пустым'),
    description: Yup.string()
      .min(1)
      .max(125)
      .required('Поле не может быть пустым'),
  });

  const {handleChange, handleSubmit, values, errors, isValid} = useFormik({
    validationSchema: BasicInfoSchema,
    initialValues: {
      name: context.name,
      cookTime: String(context.cookTime),
      service: String(context.service),
      description: context.description,
    },
    onSubmit: values => {
      setBasicInfo(
        values.name,
        +values.cookTime,
        +values.service,
        values.description,
      );
    },
  });

  const {colors} = useTheme();

  useEffect(() => {
    handleSubmit();
  }, [values]);

  useEffect(() => {
    setIsValid(isValid);
  }, [isValid]);

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        {backgroundColor: colors.background},
      ]}>
      <View style={styles.inputsContainer}>
        <View style={styles.inputContainerColumn}>
          <AppText style={styles.inputTitle}>Введите название рецепта:</AppText>
          <AppTextInput
            value={values.name}
            onChangeText={handleChange('name')}
            error={!!errors.name}
            errorMessage={errors.name}
          />
        </View>

        <View style={styles.inputContainerColumn}>
          <AppText style={styles.inputTitle}>
            Введите время приготовления в минутах:
          </AppText>
          <AppTextInput
            value={values.cookTime}
            onChangeText={handleChange('cookTime')}
            error={!!errors.cookTime}
            errorMessage={errors.cookTime}
          />
        </View>

        <View style={styles.inputContainerColumn}>
          <AppText style={styles.inputTitle}>
            Введите количество порций:
          </AppText>
          <AppTextInput
            value={values.service}
            onChangeText={handleChange('service')}
            error={!!errors.service}
            errorMessage={errors.service}
          />
        </View>

        <View style={styles.inputContainerColumn}>
          <AppText style={styles.inputTitle}>Введите краткое описание:</AppText>
          <AppTextInput
            value={values.description}
            onChangeText={handleChange('description')}
            error={!!errors.description}
            errorMessage={errors.description}
          />
        </View>

        <View style={styles.inputContainerColumn}>
          <Button title="Select Image" onPress={selectImage} />
          {imageUri && (
            <Image
              source={{uri: imageUri}}
              style={{
                width: 200,
                height: 200,
                marginTop: 20,
                alignSelf: 'center',
              }}
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingBottom: 60,
  },
  input: {
    borderRadius: 5,
    borderWidth: 2,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  inputsContainer: {
    marginTop: 10,
    rowGap: 10,
  },
  inputTitle: {
    fontSize: 20,
    fontFamily: 'Rubik-Regular',
  },
  inputContainerColumn: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
  },
  inputContainerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
  },
});
