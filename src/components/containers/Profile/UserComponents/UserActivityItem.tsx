import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {RadioButton} from '../../../common/Buttons/RadioButtons';
import {AppText} from '../../../common/AppText';
import {COLORS} from '../../../../themes/COLORS';

interface Props {
  title: string;
  description: string;
  status: boolean;
  onPress: () => void;
}

export const UserActivityItem = ({
  title,
  description,
  status,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      style={styles.activityItem}
      activeOpacity={0.7}
      onPress={onPress}>
      <RadioButton status={status} />
      <View style={styles.textView}>
        <AppText style={styles.titleText} fontWeight="medium">
          {title}
        </AppText>
        <AppText style={styles.descriptionText}>{description}</AppText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  activityItem: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  textView: {
    paddingHorizontal: 15,
  },
  titleText: {
    textAlign: 'left',
    fontSize: 20,
  },
  descriptionText: {
    fontSize: 16,
    textAlign: 'left',
    color: COLORS.gray,
  },
});
