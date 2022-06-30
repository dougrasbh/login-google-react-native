import { useNavigation } from "@react-navigation/native";
import { 
    Container,
    BackgroundImage
} from "./styles";

import { Header } from "../../components/Header";

export function Comprar() {
    const navigation = useNavigation();
    async function handleLogout() {
        navigation.navigate('SignIn');
    }
    return(
        <Container>
            <Header
            headerTitle="Comprar"
            onPress={handleLogout}
            />
            <BackgroundImage
            source={require('../../assets/back.png')}
            />
        </Container>
    )
}