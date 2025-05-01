import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'Bearer your_api_read_access_token';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: API_KEY,
  },
});

export const fetchTrendingMovies = () => {
  return axiosInstance.get('/trending/movie/day').then(res => res.data.results);
};

export const searchMovies = query => {
  return axiosInstance.get(`/search/movie?query=${query}&include_adult=false`).then(res => res.data.results);
};

export const fetchMovieDetails = id => {
  return axiosInstance.get(`/movie/${id}`).then(res => res.data);
};

export const fetchMovieCredits = id => {
  return axiosInstance.get(`/movie/${id}/credits`).then(res => res.data.cast);
};

export const fetchMovieReviews = id => {
  return axiosInstance.get(`/movie/${id}/reviews`).then(res => res.data.results);
};

export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';