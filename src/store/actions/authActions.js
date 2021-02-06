import * as types from "../types";

export function auth({ name, avatar }) {
  return {
    type: types.AUTHENTICATED,
    user: { name, avatar },
  };
}

export function authError(error) {
  return {
    type: types.UNAUTHENTICATED,
    error,
  };
}
