import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const Test = () => {
  const [textInputs, setTextInputs] = useState(['']);

  const addTextInput = () => {
    setTextInputs([...textInputs, '']);
  };

  const removeTextInput = (index) => {
    const newInputs = [...textInputs];
    newInputs.splice(index, 1);
    setTextInputs(newInputs);
  };

  return (
    <View style={{ padding: 20 }}>
      {textInputs.map((value, index) => {
        return (
          <View key={index} style={{ marginBottom: 10 }}>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 5 }}
              value={value}
              onChangeText={(text) => {
                const newInputs = [...textInputs];
                newInputs[index] = text;
                setTextInputs(newInputs);
              }}
            />
            <Button title="Удалить" onPress={() => removeTextInput(index)} />
          </View>
        );
      })}
      <Button title="Добавить" onPress={addTextInput} />
    </View>
  );
};

export default Test;
