import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '50b2d84215bb5b283063fe99705a416c';

const fetchTrendsFilms = period => {
  return axios
    .get(`${BASE_URL}/trending/all/${period}?api_key=${API_KEY}`)
    .then(response => response.data.results);
};

const fetchFilmById = id => {
  return axios
    .get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`)
    .then(response => response.data);
};

const fetchCasts = movieId => {
  return axios
    .get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`)
    .then(response => response.data.cast);
};

const fetchReview = movieId => {
  return axios
    .get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
    )
    .then(response => response.data.results);
};

const fetchFilmsByQuery = name => {
  return axios
    .get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${name}`)
    .then(response => response.data.results);
};

export default { fetchTrendsFilms, fetchFilmById, fetchCasts, fetchReview, fetchFilmsByQuery };
