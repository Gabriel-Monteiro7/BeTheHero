import styled from "styled-components";
import { sm } from "../../styles/global";

export const RegisterContainer = styled.div`
  min-height: 100vh;
  max-width: 1120px;
  margin: 0 auto;
`;
export const Container = styled.div`
  position: relative;
  margin: 40px 20px;

  ul {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
    list-style: none;
  }
  @media (max-width: ${sm}px) {
    ul {
      grid-template-columns: repeat(1, 1fr);
    }
    h1 {
      font-size: 1.5rem;
    }
  }
`;
export const NoIncidents = styled.div`
  color: #d8d8d8;
  font-size: 25px;
  text-align: center;
  font-weight: bold;
  margin: auto;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  min-height: 390px;
`;
