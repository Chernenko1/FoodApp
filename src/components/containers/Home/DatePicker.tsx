import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import {useEffect, useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {AppText} from '../../common/AppText';

import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../../themes/COLORS';
import {formatDate} from '../../../utils/formDate';

interface Props {
  handleDate: (date: string) => void;
}

export const DatePicker = ({handleDate}: Props) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined,
  ) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate as Date);
  };

  const showMode = () => {
    setShow(true);
  };

  useEffect(() => {
    handleDate(formatDate(date));
  }, [date]);

  return (
    <View style={styles.mainView}>
      <Pressable style={styles.contentView} onPress={showMode}>
        <AppText style={styles.text}>{formatDate(date)}</AppText>
        <Icon name="calendar-outline" color={COLORS.black} size={20} />
      </Pressable>
      <View>
        {show && (
          <DateTimePicker value={date} mode={'date'} onChange={onChange} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    marginTop: 5,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    backgroundColor: COLORS.lightGray,
  },
  text: {
    color: COLORS.black,
    fontSize: 18,
    marginRight: 10,
  },
});
