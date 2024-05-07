import {useEffect, useRef} from 'react';
import {Animated, StyleProp, View, ViewStyle} from 'react-native';

interface IShakeCard {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  shake: boolean;
}

export const ShakeCard = ({style, children, shake}: IShakeCard) => {
  const refShake = useRef(new Animated.Value(0)).current;

  const startShake = () => {
    Animated.sequence([
      Animated.timing(refShake, {
        toValue: 5,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(refShake, {
        toValue: -5,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(refShake, {
        toValue: 5,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(refShake, {
        toValue: 0,
        duration: 50,
        useNativeDriver: true,
      }),
    ]).start();
  };

  useEffect(() => {
    if (shake) {
      startShake();
    }
  }, [shake]);

  return (
    <Animated.View style={[{transform: [{translateX: refShake}]}, style]}>
      {children}
    </Animated.View>
  );
};
