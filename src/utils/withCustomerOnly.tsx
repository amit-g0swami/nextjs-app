import { useEffect, useState } from "react";
import { UserAuth } from "@/features/shared/contexts/AuthContext";
import { useLocalStorage } from "@/features/shared/hooks/useLocalStorage";
import {
  ROUTES,
  USER_TYPE,
  USE_LOCAL_STORAGE,
} from "@/shared/shared.interface";
import { redirect } from "next/navigation";

interface WithCustomerOnlyProps {}

export function withCustomerOnly<P extends WithCustomerOnlyProps>(
  Component: React.ComponentType<P>
) {
  return function WithCustomerOnlyWrapper(props: P) {
    const [isCustomer, setIsCustomer] = useState(false);
    const { getItem } = useLocalStorage(USE_LOCAL_STORAGE.LOGGED_IN_TYPE);
    const { user } = UserAuth();

    useEffect(() => {
      const loggedInType = getItem();
      if (loggedInType !== USER_TYPE.CUSTOMER || user === null) {
        setIsCustomer(false);
        redirect(ROUTES.LOGIN);
      } else {
        setIsCustomer(true);
      }
    }, [user, getItem]);

    return isCustomer ? <Component {...props} /> : null;
  };
}

export default withCustomerOnly;
