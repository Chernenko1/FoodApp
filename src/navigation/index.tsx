import React, { useEffect, useState } from "react";
import { BottomNavigation } from "./BottomNavigation";
import { getStorageItem } from "../utils/getStorageItem";
import { StartStackNavigation } from "./AuthStackNavigation";

  export const AppNavigator = () => {

    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
      async function checkAuth() {
          const authValue = await getStorageItem("isAuth");
          setIsAuth(!!authValue);
      }

      checkAuth();
  }, []);

    return isAuth ? <BottomNavigation /> : <StartStackNavigation />
  }