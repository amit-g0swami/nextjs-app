import { useEffect, useState } from "react";
import { UserAuth } from "@/features/shared/contexts/AuthContext";
import { useLocalStorage } from "@/features/shared/hooks/useLocalStorage";
import {
  ROUTES,
  USER_TYPE,
  USE_LOCAL_STORAGE,
} from "@/shared/shared.interface";
import NotFound from "@/app/not-found";

interface WithSellerOnlyProps {}

export function withSellerOnly<P extends WithSellerOnlyProps>(
  Component: React.ComponentType<P>
) {
  return function WithSellerOnlyWrapper(props: P) {
    const [isSeller, setIsSeller] = useState(false);
    const { getItem } = useLocalStorage(USE_LOCAL_STORAGE.LOGGED_IN_TYPE);
    const { user } = UserAuth();

    useEffect(() => {
      const loggedInType = getItem();
      if (loggedInType !== USER_TYPE.SELLER || user === null) {
        setIsSeller(false);
      } else {
        setIsSeller(true);
      }
    }, [user, getItem]);

    return isSeller ? <Component {...props} /> : <NotFound />;
  };
}

export default withSellerOnly;
