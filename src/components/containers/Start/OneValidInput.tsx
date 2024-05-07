import {StyleSheet, View} from 'react-native';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {useTheme} from '@react-navigation/native';

import {InputText} from '../../common/Inputs/TextInput';
import {AppText} from '../../common/AppText';
import {Button} from '../../common/Buttons/Button';
import {COLORS} from '../../../themes/COLORS';

interface Props {
  min: number;
  max: number;
  errorText: string;
  handlePress: (value: string) => void;
}

export const OneValidInput = ({min, max, errorText, handlePress}: Props) => {
  const {colors} = useTheme();

  const Schema = Yup.object().shape({
    valid: Yup.number().required(errorText).min(min).max(max),
  });

  const {handleChange, handleSubmit, values, handleBlur, errors, touched} =
    useFormik({
      validationSchema: Schema,
      initialValues: {valid: ''},
      onSubmit: values => handlePress(values.valid),
    });

  return (
    <View style={[styles.mainView, {backgroundColor: colors.background}]}>
      <View>
        <InputText
          value={values.valid}
          style={styles.input}
          onChangeText={handleChange('valid')}
          onBlur={handleBlur('valid')}
          error={errors.valid}
          touched={touched.valid}
          keyboardType="numeric"
          maxLength={3}
          height={80}
        />
        {errors.valid && <AppText style={{fontSize: 18}}>{errorText}</AppText>}
      </View>
      <Button
        title="Press"
        onPress={handleSubmit}
        color={COLORS.orange}
        textColor={COLORS.black}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  input: {
    borderWidth: 3,
    borderRadius: 10,
    fontSize: 40,
  },
});
