// https://api.themoviedb.org/3/movie/popular?api_key=8ea237635bae99ce8870d4a221bd2537&language=es-MX&page=1
const API_KEY = '8ea237635bae99ce8870d4a221bd2537';
const configAPI = {}

const axiosGetConfigurationAPI = ()=>{
  axios(
      `https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`
      ).then(
        res => {
          configAPI.backdropSizes = res.data.images.backdrop_sizes;
          configAPI.baseURL = res.data.images.base_url;
          configAPI.posterSizes = res.data.images.poster_sizes;

          console.log(res)
        }
      ).catch(
        error => console.log(error)
      )
};


const axiosGetPopularMovies = async (page=1) => {
    try {
      const response = await axios(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-MX&page=${page}`
      );
      console.log(response.data);
      return response.data.results;
    } catch (error) {
      console.log(error);
    }
};

const getMovieData = async (pagina) => {
  let movies;
  await axiosGetPopularMovies(pagina).then(
      res=>movies=res.map(
          movie => {
              return {
                  posterPath: getPosterURL(movie.poster_path,2),
                  releaseDate: movie.release_date,
                  title: movie.original_title,
                  id: movie.id
              }
          }
      )
  );
  console.log(movies)
  return movies
}

axiosGetConfigurationAPI();

const getBackdropURL = (backdropURL,size=0) => `${configAPI.baseURL}${configAPI.backdropSizes[size]}${backdropURL}`
const getPosterURL = (posterURL,size=2) => `${configAPI.baseURL}${configAPI.posterSizes[size]}${posterURL}`

const axiosGetBackdrop = async (backdropURL,size=0) => {
  try {
    const response = await axios(
      getBackdropURL(backdropURL,size)
    );
    
    return response;
  } catch (error) {
    console.log(error);
  }
};

const axiosGetPoster = async (posterURL,size=0) => {
  try {
    const response = await axios(
      getPosterURL(posterURL,size)
    );
    
    return response;
  } catch (error) {
    console.log(error);
  }
};



export {axiosGetPopularMovies,getMovieData,configAPI,axiosGetBackdrop,axiosGetPoster,getBackdropURL,getPosterURL};
export default getMovieData;

