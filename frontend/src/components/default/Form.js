import React from "react";
import { Input } from "@rocketseat/unform";
import * as Yup from "yup";
import { StyleForm, InputArea, Container } from "../../styles/form";
import { singInRequest } from "../../store/modules/auth/actions";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/logo.svg";
import { FiLogIn } from "react-icons/all";
let schema = Yup.object().shape({
  name: Yup.string().required("Campo obrigatório"),
  email: Yup.string()
    .email()
    .required("Campo obrigatório"),
  whatsapp: Yup.string().required("Campo obrigatório"),
  city: Yup.string().required("Campo obrigatório"),
  uf: Yup.string().required("Digite o UF")
});

export default function Form({ email, senha }) {
  let { loading } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  function handleSubmit({ id }) {
    dispatch(singInRequest(id));
  }
  return (
    <StyleForm schema={schema} onSubmit={handleSubmit}>
      <InputArea>
        <Input name="name" type="text" placeholder={"Nome da ONG"} />
      </InputArea>
      <InputArea>
        <Input name="email" type="text" placeholder={"E-mail"} />
      </InputArea>
      <InputArea>
        <Input name="whatsapp" type="text" placeholder={"Whatsapp"} />
      </InputArea>
      <Container>
        <InputArea width={83}>
          <Input name="city" type="text" placeholder={"Cidade"} />
        </InputArea>
        <InputArea width={15}>
          <Input name="uf" type="text" placeholder={"UF"} maxLength={2} />
        </InputArea>
      </Container>

      <button className="btn" type="submit">
        {loading ? "Carregando..." : "Cadastrar"}
      </button>
    </StyleForm>
  );
}
