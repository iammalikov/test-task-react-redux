import { releaseApi } from "../../utils/api";
import { serializeAlbums } from "../../utils/serialize";

import constants from "./constants";

const SearchResultsActions = {
  setSearchResults: data => ({
    type: constants.SEARCH_RESULTS_SET,
    payload: data
  }),
  fetchSearchResults: query => dispatch => {
    releaseApi.search(query).then(response => {
      const dirtyAlbumsData = response["release-groups"];
      const cleanAlbumsData = serializeAlbums(dirtyAlbumsData);

      dispatch(SearchResultsActions.setSearchResults(cleanAlbumsData));
    });
  },
  resetSearchResults: () => ({
    type: constants.SEARCH_RESULTS_RESET
  })
};

export default SearchResultsActions;
