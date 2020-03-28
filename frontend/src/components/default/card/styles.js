import styled from "styled-components";
import {} from "styled-components";
import { md, sm } from "../../../styles/global";

export const StylesCard = styled.li`
  word-break: break-all;
  position: relative;
  padding: 25px;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 6px;

  strong {
    color: #41414d;
    margin-bottom: 16px;
  }
  p + strong {
    margin-top: 32px;
  }
  p {
    color: #737380;
  }
`;

export const ButtonDelete = styled.button`
  border: 0;
  right: 25px;
  position: absolute;
  background: transparent;
  color: #737380;
  font-size: 22px;
  &:hover {
    opacity: 0.8;
  }
`;
