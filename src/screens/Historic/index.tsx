import { useNavigation } from "@react-navigation/native";
import { Container, BackgroundImage } from "./styles";

import { Header } from "../../components/Header";

export function Historic() {
  return (
    <Container>
      <Header headerTitle="Histórico" />
      <BackgroundImage source={require("../../assets/back.png")} />
    </Container>
  );
}
