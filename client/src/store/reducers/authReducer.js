import ActionType from "../actions";
const initialState = {
  isAuth: false,
  fileIds: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOGOUT:
      return {
        ...state,
        isAuth: false,
        fileIds: []
      };
    case ActionType.LOGIN_OKAY:
      console.log(action);
      return {
        ...state,
        isAuth: true,
        fileIds: [...state.fileIds, ...action.info]
      };
    default:
      return state;
  }
};

export default reducer;
