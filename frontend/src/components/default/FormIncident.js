import React, { useState } from "react";
import { Input } from "@rocketseat/unform";
import * as Yup from "yup";
import { StyleForm, InputArea, Container } from "../../styles/form";
import { addIncidentRequest } from "../../store/modules/incident/actions";
import { useDispatch, useSelector } from "react-redux";
import { Button, Cancelar } from "../../styles/global";
let schema = Yup.object().shape({
  title: Yup.string().required("Campo obrigatório"),
  description: Yup.string().required("Campo obrigatório"),
  value: Yup.string().required("Campo obrigatório")
});

export default function FormIncident() {
  let { token } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  function handleSubmit(incident) {
    dispatch(addIncidentRequest(token, incident));
  }
  return (
    <StyleForm schema={schema} onSubmit={handleSubmit}>
      <InputArea>
        <Input name="title" type="text" placeholder={"Titulo do caso"} />
      </InputArea>
      <InputArea>
        <Input
          name="description"
          multiline
          type="text"
          placeholder={"Descrição"}
        />
      </InputArea>
      <InputArea>
        <Input name="value" type="number" placeholder={"Valor em reais"} />
      </InputArea>
      <Container></Container>
      {/* <Cancelar
        type={"button"}
      >
        Cancelar
      </Cancelar> */}
      <Button type="submit">Cadastrar</Button>
    </StyleForm>
  );
}
