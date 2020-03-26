import styled, { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import { darken } from "polished";
import link from "react-router-dom/Link";

// Dispositivos small (telefones em modo paisagem, com 576px ou mais)
export const sm = 576;

// Dispositivos médios (tablets com 768px ou mais)
export const md = 768;

// Dispositivos large (desktops com 992px ou mais)
export const lg = 992;

// Dispositivos extra large (desktops grandes com 1200px ou mais)
export const xl = 1200;
export const GlobalStyle = createGlobalStyle`
    margin:0px;
    padding:0px;
    outline:0px;
    
    *{
      box-sizing:border-box;
      font-family:Roboto !important;
        -webkit-font-smoothing: antialiased !important;
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
.btn{
  transition: background 0.3s ease-in-out ;
    font-weight: bold;
    display: block;
    background: #DC1E3A;
    border: 0px;
    color: white;
    padding: 20px 0px;
    width: 100%;
    font-size: 18px;
    margin: 15px 0px 20px;
    border-radius:8px;
    &:hover{
      background:${darken(0.03, "#DC1E3A")}
    }
  }
  input,button,textarea{
    outline:0;
  }
  
`;
export const Link = styled(link)`
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
