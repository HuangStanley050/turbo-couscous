import ActionType from "./index";

export const uploadFile = file => ({
  type: ActionType.UPLOAD_FILE,
  file
});
