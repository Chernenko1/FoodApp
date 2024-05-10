import {StyleSheet, View} from 'react-native';
import {AppText} from '../AppText';
import {DashedLine} from '../DashedLine';
import {COLORS} from '../../../themes/COLORS';

interface ICardProps {
  nameText: string | number;
  infoText: string | number;
}

export const LineInfoCard = ({nameText, infoText}: ICardProps) => {
  return (
    <View style={styles.mainView}>
      <AppText style={styles.text}>{nameText}</AppText>
      <DashedLine
        style={{top: -10}}
        dashStyle={{backgroundColor: COLORS.gray}}
      />
      <AppText style={styles.text}>{infoText}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 20,
    maxWidth: '30%',
  },
});
