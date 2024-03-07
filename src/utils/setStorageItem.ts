import AsyncStorage from "@react-native-async-storage/async-storage";
import { isObject } from "formik";

export async function setStorageItem (key: string, value: any) {
    try {
        if(isObject(value)) {
            value = JSON.stringify(value);
        }
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log(e)
    }
  };