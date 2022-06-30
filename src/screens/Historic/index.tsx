import { useNavigation } from "@react-navigation/native";
import { Container, BackgroundImage } from "./styles";

import { Header } from "../../components/Header";

export function Historic() {
  async function handleLogout(): Promise<void> {

  };
  return (
    <Container>
      <Header headerTitle="Histórico" onPress={handleLogout} />
      <BackgroundImage source={require("../../assets/back.png")} />
    </Container>
  );
}
