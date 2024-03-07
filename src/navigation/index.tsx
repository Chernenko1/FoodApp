import React from "react";
import { BottomNavigation } from "./BottomNavigation";
import { getStorageItem } from "../utils/getStorageItem";
import { StartStackNavigation } from "./startStackNavigation";

  export const AppNavigator = () => {
    let isFirstStart: string | undefined
    getStorageItem('isFirstStart').then(e => isFirstStart = e)

    return isFirstStart ? <BottomNavigation /> : <StartStackNavigation />
  }