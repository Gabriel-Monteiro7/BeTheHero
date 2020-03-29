import produce from "immer";
const INITIAL_STATE = {
  user: ""
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "@auth/SIGN_IN_SUCCESS":
        draft.user = action.payload.user;
        break;
      case "@auth/SIGN_OUT": {
        draft.user = "";
        break;
      }
      case "@user/ADD_USER_REQUEST":
        break;
      default:
    }
  });
}
