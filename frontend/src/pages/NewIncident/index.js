import React from "react";
import { IncidentContainer, Container } from "./styles";
import Form from "../../components/default/FormIncident";
import logo from "../../assets/logo.svg";
import { FiArrowLeft } from "react-icons/all";
import { LinkDefault } from "../../styles/global";
export default function NewIncident() {
  return (
    <IncidentContainer>
      <div className="container">
        <Container>
          <img src={logo} />
          <h1>Cadastrar novo Caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para ersolver
            isso.
          </p>
          <LinkDefault to="/">
            <FiArrowLeft size={18} color={"#DC1E3A"} /> Voltar para a home
          </LinkDefault>
        </Container>
        <Form />
      </div>
    </IncidentContainer>
  );
}
