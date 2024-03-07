import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getStorageItem (key: string) {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
          return value
        }
      } catch (e) {
        console.log(e)
      }
}