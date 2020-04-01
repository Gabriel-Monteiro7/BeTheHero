import React from "react";
import { Image, TouchableOpacity, Linking } from "react-native";
import logoImg from "../../assets/logo.png";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as MailComposer from "expo-mail-composer";
import { formatPrice } from "../../util/format";

import {
  Container,
  Header,
  Incident,
  IncidentProperty,
  IncidentValue,
  ContactBox,
  ActionText,
  Action,
  Actions,
  HeroDescription,
  HeroTitle
} from "./styles";
export default function Detail() {
  const route = useRoute();
  const incident = route.params.incident;
  const navigation = useNavigation();
  const message = `Olá ${
    incident.name
  } estou entrando em contato pois gostaria de ajudar no caso: ${
    incident.title
  }, com o valor de ${formatPrice(incident.value)}.`;
  function navigateBack() {
    navigation.goBack();
  }
  function sendMail() {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [`${incident.email}`],
      body: message
    });
  }
  function sendWhatsapp() {
    Linking.openURL(
      `whatsapp://send?phone=${incident.whatsapp}&text=${message}`
    );
  }
  return (
    <Container>
      <Header>
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color={"#E02041"} />
        </TouchableOpacity>
      </Header>
      <Incident>
        <IncidentProperty style={{ marginTop: 0 }}>ONG:</IncidentProperty>
        <IncidentValue>
          {incident.name} de {incident.city}/{incident.uf}
        </IncidentValue>
        <IncidentProperty>CASO:</IncidentProperty>
        <IncidentValue>{incident.title}</IncidentValue>
        <IncidentProperty>DESCRIÇÃO:</IncidentProperty>
        <IncidentValue>{incident.description}</IncidentValue>
        <IncidentProperty>VALOR:</IncidentProperty>
        <IncidentValue>{formatPrice(incident.value)}</IncidentValue>
      </Incident>
      <ContactBox>
        <HeroTitle>Salve o dia!</HeroTitle>
        <HeroTitle>Seja o herói desse caso.</HeroTitle>
        <HeroDescription>Salve o dia!</HeroDescription>
        <Actions>
          <Action onPress={sendWhatsapp}>
            <ActionText>WhatsApp</ActionText>
          </Action>
          <Action onPress={sendMail}>
            <ActionText>E-mail</ActionText>
          </Action>
        </Actions>
      </ContactBox>
    </Container>
  );
}
