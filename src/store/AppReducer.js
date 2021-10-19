export default (state, actions) => {
  if (actions.type === "SETMOVIES") {
    return {
      ...state,
      moviesState: actions.payload,
    };
  }
};
