import styled, { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import { darken } from "polished";
import { Link } from "react-router-dom";

// Dispositivos small (telefones em modo paisagem, com 576px ou mais)
export const sm = 576;

// Dispositivos médios (tablets com 768px ou mais)
export const md = 768;

// Dispositivos large (desktops com 992px ou mais)
export const lg = 992;

// Dispositivos extra large (desktops grandes com 1200px ou mais)
export const xl = 1200;
export const GlobalStyle = createGlobalStyle`
    *{
      text-decoration: none !important;

      margin:0px;
    padding:0px;
    outline:0px;
      box-sizing:border-box;
      font-family:Roboto !important;
        -webkit-font-smoothing: antialiased !important;
        resize:vertical;
    }
    html,body,#root{
        background: #F0EEF6;
        .btn,a,button{
        
        cursor: pointer;
    }
    
    }
    
    #root{
        /* max-width:1020px; */

    }


    ::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;

}
::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #6E6E6E;
}

::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
}

  input,button,textarea{
    outline:0;
  }
  .alert{
    .swal-footer {
    display: flex;
    justify-content: space-around;
    padding:0px;
    margin:10px 0px;
    .swal-button{
        border-radius: 2px;
        padding: 6px 25px;
        background: transparent;
        &:hover,&:active{
        background: transparent;
      }
    }
    .swal-button--true {
      color: #6e6e6e;
      &:hover{
        color: #6e6e6e;
      }
    }
    .swal-button--false {

        color: #dc1e3a;
    &:hover,&:active{
        border:0px !important;
        color: #dc1e3a;
        outline:none !important;
    }
    }
  }

  .swal-title {
        font-size: 17px;
    font-weight: normal;
        margin: 0px 20px;
    border-bottom: 1px solid;
      padding: 25px 16px;
    }
  }
  
  .btn,button{
        outline:0 !important;
        border-radius:5px;
        &:active:focus{
            outline:0 !important;
            border:0;
        }
    }
    .link {
    float:right;
    cursor:pointer;
    text-decoration: underline;
    text-align:end;
    &:hover {
      color: #dc1e3a;
      text-decoration: underline;
      opacity: 0.8;
    }
  }
`;
export const LinkDefault = styled(Link)`
  width: fit-content;
  display: flex;
  justify-content: end;
  color: #41414d;
  font-weight: bold;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  margin: 20px 0px;
  svg {
    margin-right: 8px;
  }
  &:hover {
    opacity: 0.8;
  }
`;
export const Button = styled.button`
  transition: background 0.3s ease-in-out;
  font-weight: bold;
  display: block;
  background: #dc1e3a;
  border: 0px;
  color: white;
  padding: 20px 0px;
  width: ${props => (props.width === undefined ? "100%" : props.width)};
  font-size: 18px;
  margin: 15px 0px 20px;
  display: inline-block;
  border-radius: 8px;
  &:hover {
    background: ${darken(0.03, "#DC1E3A")};
  }
`;
export const Cancelar = styled(Button)`
  color: #333;
  width: 40%;
  background: transparent;
  margin: 15px 15px 20px 0px;
  border: 1px solid #d8d8d8;
  &:hover {
    background: transparent;

    border-color: #bdbdbd;
  }
  @media (max-width: ${sm}px) {
    margin: 15px 10px 20px 0px;
  }
`;
