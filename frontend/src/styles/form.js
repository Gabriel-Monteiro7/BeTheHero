import styled from "styled-components";
import { Form } from "@rocketseat/unform";
// import { darken } from "polished";
import { sm, md } from "./global";
// import { Link } from "react-router-dom";
export const StyleForm = styled(Form)`
  width: 450px;

  @media (max-width: ${sm}px) {
    margin-right: 0px;
    width: 100%;
  }
`;
export const InputArea = styled.div`
  width: ${props => (props.width === undefined ? "100%" : props.width + "%")};
  display: inline-block;

  label {
    font-size: 30px;
    margin-bottom: 25px;
    font-weight: bold;
  }

  input,
  textarea {
    border-radius: 6px;
    margin-top: 8px;
    padding: 20px 20px;
    width: 100%;
    border: 1px solid #d9d7e3;
    color: #333;
    font-size: 18px;
    &::placeholder {
      color: #a4a4a4;
    }
  }
  textarea {
    min-height: 170px;
  }
  span {
    margin: 5px 0px;
    font-size: 12px;
    color: #fe2e2e;
  }
  @media (max-width: ${md}px) {
    input {
      font-size: 14px;
      padding: 15px 12px;
    }
    label {
      font-size: 22px;
    }
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
