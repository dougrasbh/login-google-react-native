import { NavigationContainer } from "@react-navigation/native";
import { useAuthContext } from "../hooks/useAuthContext";
import { AuthRoutes } from "./Auth.routes";
import { BottomMenuRoutes } from "./BottomMenuRoutes.routes";

export function Routes() {
  const { isAuthenticated } = useAuthContext();

  return (
    <NavigationContainer>
      {isAuthenticated ? <BottomMenuRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
