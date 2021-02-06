import {
  AUTHENTICATED,
  UNAUTHENTICATED
} from '../types';
import initialState from "../state/auth";

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return { fullName: action.user.name, avatar: action.user.avatar };
    case UNAUTHENTICATED:
      return { error: action.error };
    default:
      return state;
  }
};

export default authReducer;
