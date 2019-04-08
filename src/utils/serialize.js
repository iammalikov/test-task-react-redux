const serializeArtists = artists =>
  artists.map(item => item.artist.name).join(", ");

export const serializeAlbum = album => ({
  id: album.id,
  albumName: album.title,
  artistName: serializeArtists(album["artist-credit"])
});

export const serializeAlbums = albums => {
  if (!albums.length) return albums;

  return albums.map(album => serializeAlbum(album));
};
