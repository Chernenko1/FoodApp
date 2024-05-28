import {StyleSheet, View} from 'react-native';
import * as Progress from 'react-native-progress';
import {AppText} from '../AppText';
import {COLORS} from 'themes/COLORS';

interface IMineralsCard {
  minerals: Minerals;
}

export const MineralsCard = ({minerals}: IMineralsCard) => {
  const minerals_max_counts: {name: string; measure: string; count: number}[] =
    [
      {name: 'K', count: 2500, measure: 'мг'},
      {name: 'Mg', count: 400, measure: 'мг'},
      {name: 'P', count: 800, measure: 'мг'},
      {name: 'Ca', count: 1000, measure: 'мг'},
      {name: 'Na', count: 1300, measure: 'мг'},
      {name: 'Fe', count: 20, measure: 'мг'},
      {name: 'Zn', count: 12, measure: 'мг'},
      {name: 'Mn', count: 2, measure: 'мг'},
      {name: 'Cu', count: 1000, measure: 'мг'},
      {name: 'I', count: 150, measure: 'мкг'},
      {name: 'Se', count: 55, measure: 'мкг'},
      {name: 'Cr', count: 50, measure: 'мкг'},
      {name: 'Mo', count: 70, measure: 'мкг'},
      {name: 'NaCL', count: 5000, measure: 'мг'},
    ];

  return (
    <View>
      {minerals_max_counts.map(item => (
        <View style={styles.vitaminsView}>
          <View style={styles.vitaminNameView}>
            <AppText style={{textAlign: 'right'}} size={18}>
              {item.name}
            </AppText>
          </View>
          <Progress.Bar
            progress={minerals[item.name] / item.count}
            width={70}
            height={10}
            color={
              minerals[item.name] / item.count > 1 ? COLORS.red : COLORS.purple
            }
          />
          <AppText size={15}>
            {((minerals[item.name] / item.count) * 100).toFixed(1)} %
          </AppText>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  vitaminsView: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
  vitaminNameView: {
    width: 50,
  },
});
