import styled from "styled-components/native";
import Constants from "expo-constants";
export const Container = styled.View`
  flex: 1;
  padding: 0px 24px;
  padding-top: ${Constants.statusBarHeight + 20};
`;
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderText = styled.Text`
  font-size: 15;
  color: #737380;
`;
export const HeaderTextBold = styled.Text`
  font-weight: bold;
`;
export const Title = styled.Text`
  font-size: 38px;
  margin-bottom: 16px;
  margin-top: 48;
  color: #13131a;
  font-weight: bold;
`;
export const Description = styled.Text`
  font-size: 16;
  line-height: 24;
  color: #737380;
`;
export const IncidentList = styled.FlatList`
  margin-top: 32px;
`;
export const Incident = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 16px;
`;
export const IncidentProperty = styled.Text`
  font-size: 14px;
  color: #41414d;
  font-weight: bold;
`;
export const IncidentValue = styled.Text`
  margin-top: 8px;
  font-size: 15px;
  margin-bottom: 24;
  color: #737380;
`;

export const DetailButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const DetailButtonText = styled.Text`
  color: #e02041;
  font-size: 15px;
  font-weight: bold;
`;
export const Loading = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 50px;
`;
export const NoIncidents = styled.Text`
  color: #d8d8d8;
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  margin: auto;
`;
