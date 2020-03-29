import styled from "styled-components";

export default styled.span`
  transition: 0.1s ease-in-out;
  font-size: 40px;
  left: inherit;
  right: 10px;
  margin-bottom: 20px;
  cursor: pointer;
  svg {
    transition: 0.3s ease-in-out;
    color: white;
    border-radius: 50%;
    background: #f58324;
    padding: 14px;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
`;
