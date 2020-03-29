import { takeLatest, call, all } from "redux-saga/effects";

import api from "../../../service/api";
import history from "../../../service/history";
import swal from "sweetalert";

import { toast } from "react-toastify";
export function* addUser({ payload }) {
  try {
    const { user } = payload;
    const { data } = yield call(api.post, "ongs/", user);
    history.push("/");
    swal(`Seu ID é ${data.id}`, {
      button: false,
      icon: "success"
    });
  } catch (erro) {
    toast.error("Erro na requisição");
  }
}
export default all([takeLatest("@user/ADD_USER_REQUEST", addUser)]);
