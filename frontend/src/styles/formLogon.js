import styled from "styled-components";
import { Form } from "@rocketseat/unform";
// import { darken } from "polished";
import { sm } from "./global";
export const StyleForm = styled(Form)`
  margin-right: 30px;
  width: 350px;
  @media (max-width: ${sm}px) {
    margin-right: 0px;
    width: 260px;
    button {
      padding: 15px 20px;
      font-size: 15px;
    }
  }
`;
export const InputArea = styled.div`
  margin-top: 100px;

  label {
    font-size: 30px;
    margin-bottom: 25px;
    font-weight: bold;
  }
  input {
    border-radius: 5px;
    margin-top: 25px;
    padding: 20px 20px;
    display: block;
    width: 100%;
    border: 1px solid #d9d7e3;
    font-weight: bold;
    color: #333;
    font-size: 18px;
    &::placeholder {
      color: #a4a4a4;
    }
  }

  span {
    margin: 5px 0px;
    font-size: 12px;
    color: #fe2e2e;
  }
  @media (max-width: ${sm}px) {
    input {
      font-size: 15px;
      padding: 15px 20px;
    }
    label {
      font-size: 22px;
    }
  }
`;
