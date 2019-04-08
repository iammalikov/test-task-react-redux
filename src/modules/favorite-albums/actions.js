import { releaseApi } from "../../utils/api";
import { serializeAlbum } from "../../utils/serialize";
import { getFavoriteAlbums, updateFavoriteAlbums } from "../../utils/storage";

import constants from "./constants";

const FavoriteAlbumActions = {
  addToFavorites: ({ target: { id } }) => dispatch => {
    dispatch(FavoriteAlbumActions.fetchFavoriteAlbum(id));
  },
  fetchFavoriteAlbum: id => dispatch => {
    releaseApi.getRelease(id).then(response => {
      const cleanAlbumData = serializeAlbum(response);

      dispatch(FavoriteAlbumActions.addAlbumToStorage(cleanAlbumData));
    });
  },
  addAlbumToStorage: album => () => {
    const currentList = getFavoriteAlbums();

    currentList.unshift(album);
    updateFavoriteAlbums(currentList);
  },
  removeAlbumFromStorage: ({ target: { id } }) => dispatch => {
    const currentList = getFavoriteAlbums();
    const newList = currentList.filter(item => item.id !== id);

    updateFavoriteAlbums(newList);
    dispatch(FavoriteAlbumActions.setFavoriteAlbums(newList));
  },
  setFavoriteAlbums: list => ({
    type: constants.FAVORITE_ALBUMS_SET,
    payload: list
  }),
  resetFavoriteAlbums: () => ({
    type: constants.FAVORITE_ALBUMS_RESET
  })
};

export default FavoriteAlbumActions;
