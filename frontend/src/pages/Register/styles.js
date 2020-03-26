import styled from "styled-components";
import { sm, md } from "../../styles/global";

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  max-width: 1120px;
  margin: 0 auto;
  & .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 96px;
    box-shadow: 0px 0px 40px -1px #d8d8d8;
    border-radius: 8px;
  }
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

export const Container = styled.div`
margin-right: 30px;
  p{
    color:#737380;
    line-height:30px;
    max-width:380px;
    margin-bottom:35px;
  }
  img{
    margin-bottom:50px;
  }
  /* @media (max-width: ${md}px) {
    img {
      width: 50%;
    }
  }
  @media (max-width: ${sm}px) {
    flex-wrap: wrap;
    img {
      width: 80%;
    }
  } */
`;
