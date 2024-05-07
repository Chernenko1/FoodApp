import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useAppSelector} from '../../../../store/hooks';

import {ACTIVITY, GOAL} from '../../../../constants/user';
import {UserDetailItem} from './UserDetailsItem';
import {UserAgeModal} from './UserDetailsModal/UserAgeModal';
import {UserGenderModal} from './UserDetailsModal/UserGenderModal';
import {UserHeightModal} from './UserDetailsModal/UserHeightModal';
import {UserWeightModal} from './UserDetailsModal/UserWeightModal';

type NavProps = NativeStackScreenProps<ProfileParamList, 'UserDetails'>;

export const UserDetails = ({navigation}: NavProps) => {
  const [weightModal, setWeightModal] = useState(false);
  const [heightModal, setHeightModal] = useState(false);
  const [ageModal, setAgeModal] = useState(false);
  const [genderModal, setGenderModal] = useState(false);

  const {details} = useAppSelector(state => state.user.user);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Персональные данные',
    });
  }, [navigation]);

  return (
    <View style={styles.mainView}>
      <View>
        <UserDetailItem
          title="Цель"
          info={GOAL[details.purpose]}
          onPress={() => navigation.navigate('UserGoal')}
        />
        <UserDetailItem
          title="Вес"
          info={details.weight + ' кг'}
          onPress={() => setWeightModal(!weightModal)}>
          <UserWeightModal
            text={String(details.weight)}
            visible={weightModal}
            closeModal={() => setWeightModal(!weightModal)}
          />
        </UserDetailItem>
        <UserDetailItem
          title="Рост"
          info={details.height + ' см'}
          onPress={() => setHeightModal(!heightModal)}>
          <UserHeightModal
            text={String(details.height)}
            visible={heightModal}
            closeModal={() => setHeightModal(!heightModal)}
          />
        </UserDetailItem>
        <UserDetailItem
          title="Возраст"
          info={details.age}
          onPress={() => setAgeModal(true)}>
          <UserAgeModal
            text={String(details.age)}
            visible={ageModal}
            closeModal={() => setAgeModal(false)}
          />
        </UserDetailItem>
        <UserDetailItem
          title="Гендер"
          info={details.gender ? 'Мужской' : 'Женский'}
          onPress={() => setGenderModal(true)}>
          <UserGenderModal
            visible={genderModal}
            closeModal={() => setGenderModal(false)}
          />
        </UserDetailItem>
        <UserDetailItem
          title="Активность"
          info={ACTIVITY[details.activity]}
          onPress={() => navigation.navigate('UserActivity')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
});
