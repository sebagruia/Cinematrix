
// This function returns a random "Genre Id" which then is used to fetch different Movie Recommendations.
// In this way, the Recommendation section generates different movies at every app loading.
export const generatingGenreIdArray = (genres)=>{
    let genreArray=[];
    genres.forEach(genre=>genreArray.push(genre.id))
    let randomIndex = Math.floor(Math.random()*genreArray.length);
    return genreArray[randomIndex];
  }