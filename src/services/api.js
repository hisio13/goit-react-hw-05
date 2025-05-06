import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'f66f1892c1c72d0d87a3d99d5984fa7e'; 
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const fetchTrendingMovies = () => {
  return axiosInstance.get('/trending/movie/day', {
    params: { api_key: API_KEY }, 
  }).then(res => res.data.results);
};

export const searchMovies = query => {
  return axiosInstance.get(`/search/movie`, {
    params: {
      api_key: API_KEY, 
      query: query,
      include_adult: false,
    },
  }).then(res => res.data.results);
};

export const fetchMovieDetails = id => {
  return axiosInstance.get(`/movie/${id}`, {
    params: { api_key: API_KEY }, 
  }).then(res => res.data);
};

export const fetchMovieCredits = id => {
  return axiosInstance.get(`/movie/${id}/credits`, {
    params: { api_key: API_KEY },
  }).then(res => res.data.cast);
};

export const fetchMovieReviews = id => {
  return axiosInstance.get(`/movie/${id}/reviews`, {
    params: { api_key: API_KEY },
  }).then(res => res.data.results);
};

export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
