import {View} from 'react-native';
import {VitaminsCard} from './VitaminsCard';
import {MineralsCard} from './MineralsCard';

interface IVitMixCard {
  vitamins: Vitamins;
  minerals: Minerals;
}

export const VitMixCard = ({minerals, vitamins}: IVitMixCard) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <VitaminsCard vitamins={vitamins} />
      <MineralsCard minerals={minerals} />
    </View>
  );
};
