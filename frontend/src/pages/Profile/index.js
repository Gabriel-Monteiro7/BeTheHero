import React, { useEffect } from "react";
import { RegisterContainer, Container } from "./styles";

import NavBar from "../../components/default/navbar";
import { useDispatch, useSelector } from "react-redux";
import { getAllRequest } from "../../store/modules/incident/actions";
import Card from "../../components/default/card";
export default function Profile() {
  const dispatch = useDispatch();
  let { incidents } = useSelector(state => state.incident);
  const { token } = useSelector(state => state.auth);
  useEffect(() => {
    dispatch(getAllRequest(token));
  }, []);

  return (
    <RegisterContainer>
      <NavBar />
      <Container>
        <h1>Casos Cadastrados</h1>
        <ul>
          {incidents.map((incident, indice) => {
            return <Card key={incident.id} incident={incident} />;
          })}
        </ul>
      </Container>
    </RegisterContainer>
  );
}
