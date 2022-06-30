import styled from "styled-components/native";
import { theme } from "../../styles/theme";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    background-color: ${theme.colors.card};
    width: ${RFValue(320)}px;
    border-radius: 20px;
    padding: 35px 25px;
    margin-top: 25px;
    margin-bottom: 10px;
    padding-bottom: ${RFValue(130)}px;
`
export const BackgroundImage = styled.ImageBackground`
    width: 100%;
    height: 100%;
`
export const QuantityTicket = styled.Text`

`
export const TypeTicket = styled.Text`

`
export const ImageContainer = styled.View`

`
export const TicketImage = styled.Image`

`