import {StyleSheet, View} from 'react-native';
import * as Progress from 'react-native-progress';
import {AppText} from '../AppText';
import {COLORS} from 'themes/COLORS';

interface IVitaminsCard {
  vitamins: Vitamins;
}

export const VitaminsCard = ({vitamins}: IVitaminsCard) => {
  const vitamins_max_counts: {name: string; measure: string; count: number}[] =
    [
      {name: 'A', count: 1.2, measure: 'мг'},
      {name: 'B1', count: 2.4, measure: 'мг'},
      {name: 'B2', count: 3, measure: 'мг'},
      {name: 'B3', count: 25, measure: 'мг'},
      {name: 'B5', count: 12, measure: 'мг'},
      {name: 'B6', count: 2.8, measure: 'мг'},
      {name: 'B7', count: 130, measure: 'мкг'},
      {name: 'B9', count: 0.09, measure: 'мкг'},
      {name: 'B12', count: 3, measure: 'мкг'},
      {name: 'C', count: 100, measure: 'мг'},
      {name: 'D', count: 90, measure: 'мкг'},
      {name: 'E', count: 10, measure: 'мкг'},
      {name: 'K', count: 150, measure: 'мкг'},
    ];

  return (
    <View>
      {vitamins_max_counts.map(item => (
        <View style={styles.vitaminsView} key={item.name}>
          <View style={styles.vitaminNameView}>
            <AppText style={{textAlign: 'right'}} size={18}>
              {item.name}
            </AppText>
          </View>
          <Progress.Bar
            progress={vitamins[item.name] / item.count}
            width={70}
            height={10}
            color={
              vitamins[item.name] / item.count > 1 ? COLORS.red : COLORS.teal
            }
          />
          <AppText size={15}>
            {((vitamins[item.name] / item.count) * 100).toFixed(1)} %
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
    width: 40,
  },
});
