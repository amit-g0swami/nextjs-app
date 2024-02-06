"use client";

import withLoggedOutOnly from "@/utils/withLoggedOutOnly";
import { useState } from "react";
import { useLocalStorage } from "@/features/shared/hooks/useLocalStorage";
import { LoginComponent } from "@/features/login";
import { USER_TYPE, USE_LOCAL_STORAGE } from "@/shared/shared.interface";

const LoginPage = () => {
  const [loginType, setLoginType] = useState<USER_TYPE | null>(null);
  const { setItem } = useLocalStorage(USE_LOCAL_STORAGE.LOGGED_IN_TYPE);

  const setType = (type: USER_TYPE) => {
    setItem(type);
    setLoginType(type);
  };

  return <LoginComponent loginType={loginType} setType={setType} />;
};

export default withLoggedOutOnly(LoginPage);
