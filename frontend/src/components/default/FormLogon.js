import React from "react";
import { Input } from "@rocketseat/unform";
import * as Yup from "yup";
import { StyleForm, InputArea } from "../../styles/formLogon";
import { Link } from "../../styles/global";

import { singInRequest } from "../../store/modules/auth/actions";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/logo.svg";
import { FiLogIn } from "react-icons/all";
let schema = Yup.object().shape({
  id: Yup.string().required("Campo obrigatório")
});

export default function FormLogon({ email, senha }) {
  let { loading } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  function handleSubmit({ id }) {
    dispatch(singInRequest(id));
  }
  return (
    <StyleForm schema={schema} onSubmit={handleSubmit}>
      <img src={logo} />
      <InputArea>
        <Input
          name="id"
          type="text"
          label={"Faça seu logon"}
          placeholder={"Sua ID"}
        />
      </InputArea>

      <button className="btn" type="submit">
        {loading ? "Carregando..." : "Entrar"}
      </button>
      <Link to="/register">
        <FiLogIn color={"#DC1E3A"} size={16} /> Não tenho cadastro
      </Link>
    </StyleForm>
  );
}
