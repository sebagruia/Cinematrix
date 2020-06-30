const myStorage = window.localStorage;

// This function returns a random "Genre Id" which then is used to fetch different Movie Recommendations.
// In this way, the Recommendation section generates different movies at every app loading.
export const generatingGenreIdArray = () => {
  let genreArray = [
    28,
    12,
    35,
    80,
    99,
    18,
    10751,
    14,
    10402,
    10749,
    878,
    10770,
  ];
  let randomIndex = Math.floor(Math.random() * genreArray.length);
  return genreArray[randomIndex];
};

export const addToFavoriteToLocalStorage = (id, movie) => {
  myStorage.setItem(id, movie);
};
export const removeFavoriteFromLocalStorage = (id) => {
  myStorage.removeItem(id);
};
