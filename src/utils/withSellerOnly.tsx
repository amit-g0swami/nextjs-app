import { useEffect, useState } from "react";
import { UserAuth } from "@/features/shared/contexts/AuthContext";
import { useLocalStorage } from "@/features/shared/hooks/useLocalStorage";
import { USER_TYPE } from "@/shared/shared.interface";
import { redirect } from "next/navigation";

interface WithSellerOnlyProps {}

export function withSellerOnly<P extends WithSellerOnlyProps>(
  Component: React.ComponentType<P>
) {
  return function WithSellerOnlyWrapper(props: P) {
    const [isSeller, setIsSeller] = useState(false);
    const { getItem } = useLocalStorage("loggedInType");
    const { user } = UserAuth();

    useEffect(() => {
      const loggedInType = getItem();
      if (loggedInType !== USER_TYPE.SELLER || user === null) {
        setIsSeller(false);
        redirect("/login");
      } else {
        setIsSeller(true);
      }
    }, [user, getItem]);

    return isSeller ? <Component {...props} /> : null;
  };
}

export default withSellerOnly;
