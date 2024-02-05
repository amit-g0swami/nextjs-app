import { useEffect, useState } from "react";
import { UserAuth } from "@/features/shared/contexts/AuthContext";
import { useLocalStorage } from "@/features/shared/hooks/useLocalStorage";
import { USER_TYPE } from "@/shared/shared.interface";
import { redirect } from "next/navigation";

interface UseLoggedOutOnlyProps {}

export function useLoggedOutOnly() {
  const [isNotLoggedIn, setIsNotLoggedIn] = useState(true);
  const { user } = UserAuth();
  const { getItem } = useLocalStorage("loggedInType");
  const { getItem: getUserDetails } = useLocalStorage("userDetails");

  useEffect(() => {
    const loggedInType = getItem();
    const userDetailsString = getUserDetails() as string | undefined;

    if (
      loggedInType === USER_TYPE.SELLER &&
      userDetailsString !== undefined &&
      user
    ) {
      const sellerId = JSON.parse(userDetailsString);
      setIsNotLoggedIn(false);
      redirect(`/seller/${sellerId}`);
    }

    if (loggedInType === USER_TYPE.CUSTOMER && user) {
      setIsNotLoggedIn(false);
      redirect("/customer");
    }

    if (!user) {
      setIsNotLoggedIn(true);
    } else {
      setIsNotLoggedIn(false);
    }
  }, [user, getItem, getUserDetails]);

  return isNotLoggedIn;
}

export function withLoggedOutOnly<P extends UseLoggedOutOnlyProps>(
  Component: React.ComponentType<P>
) {
  return function useLoggedOutOnlyWrapper(props: P) {
    const isNotLoggedIn = useLoggedOutOnly();

    return isNotLoggedIn ? <Component {...props} /> : null;
  };
}

export default withLoggedOutOnly;
