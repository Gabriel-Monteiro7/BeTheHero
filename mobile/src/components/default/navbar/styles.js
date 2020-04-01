import styled from "styled-components";
import { md } from "../../../styles/global";
import { darken } from "polished";
import { Link } from "react-router-dom";
export const ContainerProfile = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  flex-wrap: wrap;
  img {
    height: 40px;
  }
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  word-break: break-all;
  span {
    margin: 0px 20px;
  }
  @media (max-width: ${md}px) {
    width: 80%;
    justify-content: end;
    span {
      margin: 0px 10px;
      font-size: 13px;
    }
  }
`;
export const Logout = styled.button`
  transition: border 0.3s ease-in-out;
  border: 1px solid #e6e6e6;
  padding: 11px 14px;
  background: transparent;
  &:hover {
    border-color: #d8d8d8;
  }
`;
export const NewCase = styled(Link)`
  border: 0px;
  background: #dc1e3a;
  font-weight: bold;
  margin: 0px 10px;
  color: white;
  border-radius: 6px;
  font-size: 11px;
  padding: 14px 36px;
  &:hover {
    background: ${darken(0.03, "#DC1E3A")};
  }
  @media (max-width: ${md}px) {
    margin: 10px 0px;
  }
`;
export const Body = styled(Container)`
  display: flex;
  @media (max-width: ${md}px) {
    padding: 20px;
    flex-direction: column;
    width: 100%;
    height: ${props => (props.display === "true" ? "100%" : "0")};
    visibility: ${props => (props.display === "true" ? "visible" : "hidden")};
  }
`;
export const ButtonToggler = styled(Logout)`
  display: none;
  @media (max-width: ${md}px) {
    display: inline-block;
  }
`;
