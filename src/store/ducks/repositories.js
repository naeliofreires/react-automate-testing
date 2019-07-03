export const Types = {
  GET_REQUEST: "REPO_GET_REQUEST",
  GET_SUCCESS: "REPO_GET_SUCCESS",
  GET_FAILURE: "REPO_GET_FAILURE"
};

export default function todos(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export const Creators = {
  getRequest: () => ({ type: Types.GET_REQUEST }),

  getSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data }
  }),

  getFailure: () => ({ type: Types.GET_FAILURE })
};
