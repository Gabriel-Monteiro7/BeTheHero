import styled from "styled-components";

export default styled.span`
  position: sticky;
  bottom: 0px;
  visibility: ${props => props.visibility};
  transition: 0.1s ease-in-out;
  font-size: 40px;
  left: inherit;
  right: 12px;
  margin-bottom: 20px;
  float: right;
  cursor: pointer;
  svg {
    transition: 0.3s ease-in-out;
    color: white;
    border-radius: 50%;
    background: #dc1e3a;
    padding: 14px;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
`;
