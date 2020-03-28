import React, { useEffect } from "react";

import { StylesCard, ButtonDelete } from "./styles";
import { FiTrash2 } from "react-icons/all";
import { useDispatch, useSelector } from "react-redux";
import { deleteIncidentRequest } from "../../../store/modules/incident/actions";
import { formatPrice } from "../../../util/format";
import swal from "sweetalert";

export default function Card({ incident }) {
  const { token } = useSelector(state => state.auth);
  let { value, title, description, id } = incident;
  const dispatch = useDispatch();
  function handleDelete() {
    swal({
      className: "alert",
      title: "Tem certeza que deseja remover?",
      buttons: { false: "Cancelar", true: "Remover" }
    }).then(willDelete => {
      if (willDelete === "true") {
        dispatch(deleteIncidentRequest(token, incident));
      }
    });
  }

  return (
    <StylesCard>
      <ButtonDelete onClick={handleDelete}>
        <FiTrash2 />
      </ButtonDelete>
      <>
        <strong>CASO:</strong>
        <p>{title}</p>
      </>
      <>
        <strong>DESCRIÇÃO:</strong>
        <p>{description}</p>
      </>
      <>
        <strong>VALOR:</strong>
        <p>{formatPrice(value)} reais</p>
      </>
    </StylesCard>
  );
}
