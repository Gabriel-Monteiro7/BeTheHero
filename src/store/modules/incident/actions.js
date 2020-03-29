export function getAllRequest(token) {
  return {
    type: "@incident/GET_ALL_REQUEST",
    payload: { token }
  };
}
export function getAllSuccess(incidents) {
  return {
    type: "@incident/GET_ALL_SUCCESS",
    payload: { incidents }
  };
}
export function addIncidentRequest(token, incident) {
  return {
    type: "@incident/ADD_INCIDENT_REQUEST",
    payload: { token, incident }
  };
}
export function addIncidentSuccess(incident) {
  return {
    type: "@incident/ADD_INCIDENT_SUCCESS",
    payload: { incident }
  };
}
export function deleteIncidentRequest(token, incident) {
  return {
    type: "@incident/DELETE_INCIDENT_REQUEST",
    payload: { token, incident }
  };
}
export function deleteIncidentSuccess(incident) {
  return {
    type: "@incident/DELETE_INCIDENT_SUCCESS",
    payload: { incident }
  };
}
