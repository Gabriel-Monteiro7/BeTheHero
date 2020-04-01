import React, { useEffect, useState } from "react";
import { RegisterContainer, Container, NoIncidents } from "./styles";
import Lottie from "react-lottie";
import load from "../../assets/load.json";
import NavBar from "../../components/default/navbar";
import { useDispatch, useSelector } from "react-redux";
import { getAllRequest } from "../../store/modules/incident/actions";
import Card from "../../components/default/card";
export default function Profile() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  let { incidents } = useSelector(state => state.incident);
  const { token } = useSelector(state => state.auth);
  useEffect(() => {
    setLoading(true);
    dispatch(getAllRequest(token));
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: load,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <RegisterContainer>
      <NavBar />
      <Container>
        <h1>Casos Cadastrados</h1>
        {loading ? (
          <NoIncidents>
            <Lottie options={defaultOptions} height={400} width={400} />
          </NoIncidents>
        ) : incidents.length === 0 ? (
          <NoIncidents>
            <span>Não existe Incidentes cadastrados</span>
          </NoIncidents>
        ) : (
          <ul>
            {incidents.map((incident, indice) => {
              return <Card key={incident.id} incident={incident} />;
            })}
          </ul>
        )}
      </Container>
    </RegisterContainer>
  );
}
