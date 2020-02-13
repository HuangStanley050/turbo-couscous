import API from "../../API";
import ActionType from "./index";
export const loginStart = userInfo => {
  return {
    type: ActionType.LOGIN_START,
    userInfo
  };
};
export const loginOkay = info => {
  return {
    type: ActionType.LOGIN_OKAY,
    info
  };
};
