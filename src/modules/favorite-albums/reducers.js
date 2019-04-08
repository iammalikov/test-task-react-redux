import constants from "./constants";

const defaultState = () => ({
  data: []
});

const favoriteAlbums = (state = defaultState(), action) => {
  switch (action.type) {
    case constants.FAVORITE_ALBUMS_SET:
      return { data: action.payload };
    case constants.FAVORITE_ALBUMS_RESET:
      return defaultState();
    default:
      return state;
  }
};

export default favoriteAlbums;
