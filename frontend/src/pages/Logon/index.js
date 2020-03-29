import React from "react";
import Imagem from "../../assets/heroes.png";
import { Container } from "./styles";
import Form from "../../components/default/FormLogon";
export default function Logon() {
  return (
    <Container>
      <Form />
      <img src={Imagem} alt="Imagem Logon" />
    </Container>
  );
}
