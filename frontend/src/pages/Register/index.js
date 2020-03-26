import React from "react";
import { RegisterContainer, Container } from "./styles";
import Form from "../../components/default/Form";
import logo from "../../assets/logo.svg";
import { FiArrowLeft } from "react-icons/all";
import { Link } from "../../styles/global";
export default function Register() {
  return (
    <RegisterContainer>
      <div className="container">
        <Container>
          <img src={logo} />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro entre na plataforma e ajude pessoas a encontrare
            os casos da sua ONG.
          </p>
          <Link to="/">
            <FiArrowLeft size={18} color={"#DC1E3A"} /> Voltar para o logon
          </Link>
        </Container>
        <Form />
      </div>
    </RegisterContainer>
  );
}
