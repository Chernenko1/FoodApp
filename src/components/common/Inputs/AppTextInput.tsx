import {forwardRef, useState} from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

import {COLORS} from 'themes/COLORS';
import {AppText} from '../AppText';

interface IAppTextInput extends TextInputProps {
  value?: string;
  error?: boolean;
  textSize?: boolean;
  errorMessage?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

export const AppTextInput = forwardRef<TextInput, IAppTextInput>(
  (props, ref) => {
    const {error, value, errorMessage, containerStyle, ...inputProps} = props;

    const [text, setText] = useState(value);
    const [isFocused, setIsFocused] = useState(false);

    function handleTextChange(textValue: string) {
      setText(textValue);
      if (props.onChangeText) {
        props.onChangeText(textValue);
      }
    }

    function handleFocus() {
      setIsFocused(true);
    }

    function handleBlur() {
      setIsFocused(false);
    }

    return (
      <View style={[styles.container, containerStyle]}>
        <View style={[styles.innerContainer, error && styles.errorContainer]}>
          <TextInput
            ref={ref}
            value={value}
            onChangeText={handleTextChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            textAlignVertical="center"
            textAlign="left"
            {...inputProps}
            style={[styles.input]}
          />
        </View>
        {error && <AppText style={styles.errorText}>{errorMessage}</AppText>}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {},
  innerContainer: {
    borderBottomWidth: 2,
    borderRadius: 10,
    borderColor: COLORS.orange,
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 0,
    fontSize: 20,
    fontFamily: 'Rubik-Light',
  },
  errorContainer: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 18,
    fontFamily: 'Rubik-Regular',
  },
});
