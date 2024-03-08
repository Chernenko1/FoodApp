import React from "react";
import { BottomNavigation } from "./BottomNavigation";
import { StartStackNavigation } from "./AuthStackNavigation";
import { useAppSelector } from "../store/hooks";

  export const AppNavigator = () => {

    const {isAuth} = useAppSelector(state => state.auth)

    return isAuth ? <BottomNavigation /> : <StartStackNavigation />
  }