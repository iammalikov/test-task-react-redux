import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import searchResults from "../modules/search-results/reducers";
import favoriteAlbums from "../modules/favorite-albums/reducers";

export default history =>
  combineReducers({
    searchResults,
    favoriteAlbums,
    router: connectRouter(history)
  });
