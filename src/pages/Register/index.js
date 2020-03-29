import React from "react";
import { RegisterContainer, Container } from "./styles";
import Form from "../../components/default/Form";
import logo from "../../assets/logo.svg";
import { FiArrowLeft } from "react-icons/all";
import { LinkDefault } from "../../styles/global";
export default function Register() {
  return (
    <RegisterContainer>
      <div className="container">
        <Container>
          <img src={logo} alt="Imagem logo" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro entre na plataforma e ajude pessoas a encontrare
            os casos da sua ONG.
          </p>
          <LinkDefault to="/">
            <FiArrowLeft size={18} color={"#DC1E3A"} /> Voltar para o logon
          </LinkDefault>
        </Container>
        <Form />
      </div>
    </RegisterContainer>
  );
}
