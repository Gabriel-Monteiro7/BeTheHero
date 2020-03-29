import { takeLatest, call, put, all } from "redux-saga/effects";

import api from "../../../service/api";
import history from "../../../service/history";
import swal from "sweetalert";

import { toast } from "react-toastify";
import {
  getAllSuccess,
  addIncidentSuccess,
  deleteIncidentSuccess
} from "./actions";
export function* getAll({ payload }) {
  try {
    const { token } = payload;

    const { data } = yield call(api.get, "profile", {
      headers: { Authorization: token }
    });

    yield put(getAllSuccess(data));
  } catch (erro) {
    toast.error("Erro na requisição");
  }
}
export function* addIncident({ payload }) {
  try {
    const { token, incident } = payload;
    const { data } = yield call(api.post, "incidents/", incident, {
      headers: { Authorization: token }
    });
    yield put(addIncidentSuccess(data));
    history.push("/profile");
    swal("Incidente Cadastrado", {
      button: false,
      icon: "success"
    });
  } catch (erro) {
    toast.error("Erro na requisição");
  }
}
export function* deleteIncident({ payload }) {
  try {
    const { token, incident } = payload;
    yield call(api.delete, "incidents/" + incident.id, {
      headers: { Authorization: token }
    });
    swal("Incidente Removido", {
      button: false,
      icon: "success"
    });
    yield put(deleteIncidentSuccess(incident));
  } catch (erro) {
    toast.error("Erro na requisição");
  }
}
export default all([
  takeLatest("@incident/GET_ALL_REQUEST", getAll),
  takeLatest("@incident/ADD_INCIDENT_REQUEST", addIncident),
  takeLatest("@incident/DELETE_INCIDENT_REQUEST", deleteIncident)
]);
