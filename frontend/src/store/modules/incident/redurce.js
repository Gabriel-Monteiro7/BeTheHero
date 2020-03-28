import produce from "immer";
const INITIAL_STATE = {
  incidents: []
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    let { payload } = action;
    switch (action.type) {
      case "@incident/GET_ALL_REQUEST":
        break;
      case "@incident/GET_ALL_SUCCESS":
        draft.incidents = payload.incidents;
        break;
      case "@incident/ADD_INCIDENT_REQUEST":
        break;
      case "@incident/ADD_INCIDENT_SUCCESS":
        draft.incidents.push(payload.incident);
        break;
      case "@incident/DELETE_INCIDENT_REQUEST":
        break;
      case "@incident/DELETE_INCIDENT_SUCCESS":
        draft.incidents = draft.incidents.filter(value => {
          return value.id === payload.incident.id ? false : true;
        });
        break;
      default:
    }
  });
}
