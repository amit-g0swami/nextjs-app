import React, { useContext, useState, useEffect, ReactNode } from "react";
import { auth } from "../../../config/firebase";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  User,
} from "firebase/auth";
import { useCreateUserMutation } from "@/features/login/hooks/useLoginMutation";
import { useLocalStorage } from "@/features/shared/hooks/useLocalStorage";
import { IUserLoginPayload } from "@/features/login/login.service";

interface IAuthContext {
  user: User | null;
  googleSignIn: () => void;
  logOut: () => void;
}

const AuthContext = React.createContext<IAuthContext>({
  user: null,
  googleSignIn: () => {},
  logOut: () => {},
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const { getItem, removeItem } = useLocalStorage("loggedInType");
  const { removeItem: removeUserDetails } = useLocalStorage("userDetails");
  const useLoginMutate = useCreateUserMutation();

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => {
      const user = result.user;
      const loggedInType = getItem();
      const userDataPayload: IUserLoginPayload = {
        name: user.displayName,
        email: user.email,
        createdAs: loggedInType,
      };
      useLoginMutate.mutate(userDataPayload);
    });
  };

  const logOut = () => {
    signOut(auth).then(() => {
      removeItem();
      removeUserDetails();
    });
    setUser(null);
  };

  const checkAuth = onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setUser(currentUser);
    } else {
      setUser(null);
    }
  });

  useEffect(() => {
    checkAuth();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, googleSignIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
