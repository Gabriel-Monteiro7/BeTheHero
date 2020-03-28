import React from "react";
import { Input } from "@rocketseat/unform";
import * as Yup from "yup";
import VMasker from "vanilla-masker";

import { StyleForm, InputArea, Container } from "../../styles/form";
import { Button } from "../../styles/global";
import { addUserRequest } from "../../store/modules/user/actions";
import { useDispatch, useSelector } from "react-redux";
let schema = Yup.object().shape({
  name: Yup.string().required("Campo obrigatório"),
  email: Yup.string()
    .email()
    .required("Campo obrigatório"),
  whatsapp: Yup.string()
    .max(11)
    .min(10)
    .required("Campo obrigatório"),
  city: Yup.string().required("Campo obrigatório"),
  uf: Yup.string()
    .uppercase()
    .min(2)
    .max(2)
    .required("Digite o UF")
});

export default function Form() {
  const dispatch = useDispatch();
  function handleSubmit(user) {
    user.whatsapp = VMasker.toPattern(user.whatsapp, "(99)99999-9999");
    dispatch(addUserRequest(user));
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
        <Input
          name="whatsapp"
          type="text"
          placeholder={"Whatsapp (99)-99999-9999"}
        />
      </InputArea>
      <Container>
        <InputArea width={82}>
          <Input name="city" type="text" placeholder={"Cidade"} />
        </InputArea>
        <InputArea width={16}>
          <Input name="uf" type="text" placeholder={"UF"} />
        </InputArea>
      </Container>

      <Button type="submit">Cadastrar</Button>
    </StyleForm>
  );
}
