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
import { USE_LOCAL_STORAGE } from "@/shared/shared.interface";

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
  const useLoginMutate = useCreateUserMutation();

  const { getItem, removeItem } = useLocalStorage(
    USE_LOCAL_STORAGE.LOGGED_IN_TYPE
  );
  const { removeItem: removeUserDetails } = useLocalStorage(
    USE_LOCAL_STORAGE.USER_DETAILS
  );

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
    const loggedInType = getItem();
    const userDataPayload: IUserLoginPayload = {
      name: user.displayName,
      email: user.email,
      createdAs: loggedInType,
    };
    useLoginMutate.mutate(userDataPayload);
  };

  const logOut = async () => {
    await signOut(auth);
    removeItem();
    removeUserDetails();
    setUser(null);
  };

  const checkAuth = onAuthStateChanged(auth, (currentUser) => {
    if (!currentUser) {
      return setUser(null);
    }
    return setUser(currentUser);
  });

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, googleSignIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
