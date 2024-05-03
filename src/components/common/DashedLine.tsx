import { useTheme } from '@react-navigation/native';
import React, {useMemo, useState} from 'react';
import {View, StyleSheet, StyleProp, ViewStyle} from 'react-native';

interface IDashedProps {
  dashGap?: number,
  dashLength?: number,
  dashThickness?: number,
  dashStyle?:StyleProp<ViewStyle>,
  style?: StyleProp<ViewStyle>,
}

export const DashedLine = ({
  dashGap = 3,
  dashLength = 1.5,
  dashThickness = 1.5,
  dashStyle,
  style,
}: IDashedProps) => {
  const {colors} = useTheme();
  const [lineLength, setLineLength] = useState(0);
  const numOfDashes = Math.ceil(lineLength / (dashGap + dashLength));

  const dashStyles = useMemo(
    () => ({
      width: dashLength,
      height: dashThickness,
      marginRight: dashGap,
      marginBottom: 0,
      backgroundColor: colors.text,
    }),
    [colors.text, dashGap, dashLength, dashThickness],
  );

  return (
    <View
      onLayout={event => {
        const {width} = event.nativeEvent.layout;
        setLineLength(width);
      }}
      style={[style, styles.row]}
    >
      {[...Array(numOfDashes)].map((_, i) => {
        return <View key={i} style={[dashStyles, dashStyle]} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1,
  },
});