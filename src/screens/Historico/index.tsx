import { useNavigation } from "@react-navigation/native";
import { 
    Container,
    BackgroundImage
 } from "./styles";

import { Header } from "../../components/Header";

export function Historico() {
    const navigation = useNavigation();
    async function handleLogout() {
        navigation.navigate('SignIn');
    }
    return(
        <Container>
            <Header
            headerTitle="Histórico"
            onPress={handleLogout}
            />
            <BackgroundImage
            source={require('../../assets/back.png')}
            />
        </Container>
    )
}