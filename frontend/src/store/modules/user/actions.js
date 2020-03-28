export function addUserRequest(user) {
  return {
    type: "@user/ADD_USER_REQUEST",
    payload: { user }
  };
}
