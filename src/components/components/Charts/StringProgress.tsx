import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { COLORS } from "../../../themes/COLORS";
import { AppText } from "../AppText";

interface Props {
    progress: number,
    children?: React.ReactNode
}

export const StringProgress = ({progress, children}:Props) => {
  const [strokeDashoffset, setStrokeDashoffset] = useState(0);
  const radius = 50; // Радиус круга

  useEffect(() => {
    // Вычисляем длину окружности
    const circumference = 2 * Math.PI * radius;
    // Вычисляем смещение для анимации
    const newOffset = circumference - (progress / 100) * circumference;
    setStrokeDashoffset(newOffset);
  }, [progress]);
  
    return (
      <View style={styles.container}>
      <View style={styles.progressBar}>
        <View
          style={[
            styles.progressCircle,
            {  strokeDasharray: 2 * Math.PI * radius },
          ]}
        />
      </View>
      <Text style={styles.progressText}>{progress}%</Text>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  progressBar: {
    width: 2 * 50,
    height: 2 * 50,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  progressCircle: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 2 * 50,
    height: 2 * 50,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#007AFF',
    transform: [{ rotate: '-90deg' }],
  },
  progressText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  });
  
