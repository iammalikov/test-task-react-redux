export const createStorageFavoriteAlbums = () => {
  if (!localStorage.hasOwnProperty("favoriteAlbums")) {
    localStorage.setItem("favoriteAlbums", "[]");
  }
};

export const getFavoriteAlbums = () =>
  JSON.parse(localStorage.getItem("favoriteAlbums"));

export const updateFavoriteAlbums = list => {
  localStorage.setItem("favoriteAlbums", JSON.stringify(list));
};
