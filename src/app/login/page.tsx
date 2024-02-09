"use client";

import withLoggedOutOnly from "@/utils/withLoggedOutOnly";
import { LoginComponent } from "@/features/login";

const LoginPage = () => {
  return <LoginComponent />;
};

export default withLoggedOutOnly(LoginPage);
