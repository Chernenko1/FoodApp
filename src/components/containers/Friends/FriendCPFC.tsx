import {AppText} from 'components/common/AppText';
import {KBFUCard} from 'components/common/Cards/KBFUCard';
import {LineInfoCard} from 'components/common/Cards/LineInfoCard';
import {StyleSheet, View} from 'react-native';

interface IFriendCPFU {
  nutrients: Nutrients;
}

export const FriendCPFC = ({nutrients}: IFriendCPFU) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.headerText} fontWeight="medium" size={30}>
        КБЖУ
      </AppText>
      <LineInfoCard
        nameText="Калории"
        infoText={nutrients.calories + ' ккал'}
      />
      <LineInfoCard nameText="Белки" infoText={nutrients.protein + ' г'} />
      <LineInfoCard nameText="Жиры" infoText={nutrients.fat + ' г'} />
      <LineInfoCard
        nameText="Углеводы"
        infoText={nutrients.carbohydrates + ' г'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    textAlign: 'center',
  },
  container: {
    paddingVertical: 5,
    rowGap: 10,
  },
});
