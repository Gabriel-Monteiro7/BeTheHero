import styled from "styled-components";
import { sm, md } from "../../styles/global";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  max-width: 1120px;
  margin: 0px auto;
  padding: 20px;

  @media (max-width: ${md}px) {
    img {
      width: 50%;
    }
  }
  @media (max-width: ${sm}px) {
    flex-wrap: wrap;
    img {
      width: 80%;
    }
  }
`;
