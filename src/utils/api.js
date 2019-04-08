export const releaseApi = {
  search: query =>
    fetch(
      `https://musicbrainz.org/ws/2/release-group?query=${encodeURIComponent(
        query
      )}&fmt=json`
    ).then(response => response.json()),
  getRelease: id =>
    fetch(
      `https://musicbrainz.org/ws/2/release-group/${encodeURIComponent(
        id
      )}?inc=artist-credits&fmt=json`
    ).then(response => response.json())
};
