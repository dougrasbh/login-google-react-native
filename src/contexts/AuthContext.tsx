import { createContext, ReactNode, useState } from "react";

import * as AuthSession from "expo-auth-session";

interface AuthContextData {
  user: User;
  isAuthenticated: boolean;
  token: string;
  signIn: () => Promise<void>;
  signOut: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

type User = {
  name: string;
  email: string;
};

type AuthResponse = {
  params: {
    access_token: string;
  };
  type: string;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [userData, setUserData] = useState<User>({} as User);
  const [token, setToken] = useState<string>("");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  async function handleGoogleSignIn(): Promise<void> {
    const { CLIENT_ID, REDIRECT_URI } = process.env;
    const SCOPE = encodeURI("profile email");
    const RESPONSE_TYPE = "token";

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

    const { type, params } = (await AuthSession.startAsync({
      authUrl,
    })) as AuthResponse;

    if (type === "success") {
      const response = await fetch(
        `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`
      );

      const user = await response.json();

      setUserData(user);
      setToken(params.access_token);
      setIsAuthenticated(true);
    }
  }

  function handleGoogleSignOut() {
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider
      value={{
        user: userData,
        isAuthenticated,
        token,
        signIn: handleGoogleSignIn,
        signOut: handleGoogleSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}