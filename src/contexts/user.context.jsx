import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

//as the actual value you want to access.NOt an initail value but default value
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// actual functional component, receiving children. Every context that gets built for us, there is a dot
//provider.Dot provider is the component that will wrap around other component that need access to the value inside
//this provider allows any of its child component to access the values inside of its useState

//using state we set the initial value to null but we need to also set initial value for context
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      console.log(user);
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
