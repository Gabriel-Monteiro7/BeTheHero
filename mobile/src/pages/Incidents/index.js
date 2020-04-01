import React, { useEffect, useState } from "react";
import { Image, Text, View, FlatList } from "react-native";
import logoImg from "../../assets/logo.png";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import api from "../../services";
import { formatPrice } from "../../util/format";
import load from "../../assets/load.json";
import Lottie from "lottie-react-native";
import {
  Container,
  Header,
  HeaderText,
  HeaderTextBold,
  Title,
  Description,
  DetailButton,
  IncidentList,
  IncidentProperty,
  IncidentValue,
  DetailButtonText,
  Incident,
  Loading,
  NoIncidents
} from "./styles";
export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();
  function navigateToDetail(incident) {
    navigation.navigate("Detail", { incident });
  }
  function renderFooter() {
    if (loading)
      return (
        <Loading>
          <Lottie
            style={{
              flex: 1
            }}
            resizeMode="cover"
            autoPlay
            source={load}
            loop
          />
        </Loading>
      );
    if (total === 0)
      return <NoIncidents>Não existe incidentes cadastrados</NoIncidents>;
    return <></>;
  }
  async function loadIncidents() {
    if (parseInt(total) > 0 && incidents.length === parseInt(total)) {
      return;
    }
    setLoading(true);
    const res = await api.get("incidents", {
      params: { page }
    });

    setTimeout(() => {
      setIncidents([...incidents, ...res.data]);
      setTotal(res.headers["x-total-count"]);
      setPage(page + 1);
      setLoading(false);
    }, 1000);
  }

  useEffect(() => {
    loadIncidents();
  }, []);
  return (
    <Container>
      <Header>
        <Image source={logoImg} />
        <HeaderText>
          Total de <HeaderTextBold>{total} casos</HeaderTextBold>
        </HeaderText>
      </Header>
      <Title>Bem-Vindo!</Title>
      <Description>Escolha um dos casos abaixo e salve o dia</Description>
      <IncidentList
        ListFooterComponent={renderFooter}
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({ item: incident }) => (
          <Incident>
            <IncidentProperty>ONG:</IncidentProperty>
            <IncidentValue>{incident.name}</IncidentValue>

            <IncidentProperty>CASO:</IncidentProperty>
            <IncidentValue>{incident.title}</IncidentValue>
            <IncidentProperty>VALOR:</IncidentProperty>
            <IncidentValue>{formatPrice(incident.value)}</IncidentValue>
            <DetailButton
              onPress={() => {
                navigateToDetail(incident);
              }}
            >
              <DetailButtonText>Ver mais detalhes</DetailButtonText>
              <Feather name="arrow-right" size={16} color={"#E02041"} />
            </DetailButton>
          </Incident>
        )}
      />
    </Container>
  );
}
