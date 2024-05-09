import {AppText} from 'components/common/AppText';
import {StyleSheet, View} from 'react-native';

interface IRecipeInstruction {
  instruction: string[];
}

export const RecipeInstruction = ({instruction}: IRecipeInstruction) => {
  return (
    <View style={styles.container}>
      {instruction.map((item, index) => (
        <View key={index} style={styles.instructionView}>
          <AppText>
            Шаг {index + 1}. {item}
          </AppText>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    rowGap: 10,
  },
  instructionView: {
    flexDirection: 'row',
  },
});
