import React from 'react';
import { StyleSheet, Dimensions, Text, View } from 'react-native';
import { Circle, Svg } from 'react-native-svg';
import { COLORS } from '../../../themes/COLORS';

interface Props {
  progress: number
}

export const CircleProgressBar = ({progress}: Props) => {

  let {width} = Dimensions.get('window')
  width *= 0.45

  let size = width - 32
  let strokeWidth = 10
  let radius = (size - strokeWidth) / 2
  const circ = 2 * Math.PI * radius;
  const strokePct = ((100 - progress) * circ) / 100;

  return (
      <Svg width={width} height={size}>
        <Circle
          r={radius}
          cx={size / 1.6}
          cy={size / 2}
          fill="none"
          stroke={COLORS.lightGray}
          {...{strokeWidth}}
        />
        <Circle
          r={radius}
          cx={size / 1.6}
          cy={size / 2}
          fill="transparent"
          stroke={COLORS.orange} // remove colour as 0% sets full circumference
          strokeDasharray={circ}
          strokeDashoffset={progress ? strokePct : 0}
          strokeLinecap="round"
          {...{ strokeWidth }}
        />
      </Svg>
  );
};

const styles = StyleSheet.create({
  progressBarWrapper: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressText: {
    position: 'absolute',
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -20 }, { translateY: -12 }],
  },
});
