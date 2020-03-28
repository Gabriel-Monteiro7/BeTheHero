import { takeLatest, call, put, all } from "redux-saga/effects";

import history from "../../../service/history";
import api from "../../../service/api";
import { toast } from "react-toastify";
import { singInSuccess, singFailure } from "./actions";

export function* signIn({ payload }) {
  try {
    const { id } = payload;
    const { data } = yield call(api.post, "sessions", {
      id
    });
    const { token, user } = {
      token: id,
      user: data.name
    };
    yield put(singInSuccess(token, user));
    history.push("/profile");
  } catch (erro) {
    toast.error("Erro na autenticação");
    yield put(singFailure());
  }
}
export function singOut() {
  history.push("/");
}
export default all([
  takeLatest("@auth/SIGN_IN_REQUEST", signIn),
  takeLatest("@auth/SIGN_OUT", singOut)
]);
