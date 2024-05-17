import {Children, useState} from 'react';
import {Pressable, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {AppText} from '../AppText';
import {ButtonIcon} from '../Buttons/ButtonIcon';

interface IDropdownCard {
  title: string;
  startPosition?: boolean;
  iconSize?: number;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const DropdownCard = ({
  title,
  iconSize = 24,
  startPosition = false,
  children,
  style,
}: IDropdownCard) => {
  const [open, setOpen] = useState(startPosition);

  function isOpen() {
    setOpen(!open);
  }

  return (
    <View style={[style]}>
      <View style={styles.headerView}>
        <AppText fontWeight="bold" size={30}>
          {title}
        </AppText>
        <ButtonIcon
          name={open ? 'chevron-up-outline' : 'chevron-down-outline'}
          size={30}
          onPress={isOpen}
        />
      </View>
      {open && <>{children}</>}
    </View>
  );
};

const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
