import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { singOut } from "../../../store/modules/auth/actions";
import {
  ContainerProfile,
  Container,
  ButtonToggler,
  Body,
  NewCase,
  Logout
} from "./styles";
import swal from "sweetalert";
import logo from "../../../assets/logo.svg";
import { FiMenu, FiPower } from "react-icons/all";
export default function NavBar() {
  const [display, setDisplay] = useState(false);
  let { user } = useSelector(state => state.user);
  const dispatch = useDispatch();
  function handleSingOut() {
    swal({
      className: "alert",
      title: "Tem certeza que deseja sair ?",
      buttons: { false: "Cancelar", true: "sair" }
    }).then(willDelete => {
      if (willDelete === "true") {
        dispatch(singOut());
      }
    });
  }
  return (
    <ContainerProfile>
      <Container>
        <Link to="/profile">
          <img src={logo} alt="logo" />
        </Link>

        <span>Bem vindo(a), {user}</span>
      </Container>
      <ButtonToggler
        onClick={() => {
          setDisplay(!display);
        }}
        title="Botão toggler"
      >
        <FiMenu color={"#DC1E3A"} size={18} />
      </ButtonToggler>
      <Body display={"" + display}>
        <NewCase to="/incidents/new">Cadastrar novo caso</NewCase>
        <Logout onClick={handleSingOut}>
          <FiPower size={14} color={"#DC1E3A"} />
        </Logout>
      </Body>
    </ContainerProfile>
  );
}
