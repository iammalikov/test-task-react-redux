import constants from "./constants";

const defaultState = () => ({
  data: []
});

const searchResults = (state = defaultState(), action) => {
  switch (action.type) {
    case constants.SEARCH_RESULTS_SET:
      return { data: action.payload };
    case constants.SEARCH_RESULTS_RESET:
      return defaultState();
    default:
      return state;
  }
};

export default searchResults;
