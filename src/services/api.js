import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'f66f1892c1c72d0d87a3d99d5984fa7e'; 
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const fetchTrendingMovies = async () => {
  const response = await axiosInstance.get('/trending/movie/day');
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await axiosInstance.get('/search/movie', {
    params: {
      query,
      include_adult: false,
    },
  });
  return response.data.results;
};

export const fetchMovieDetails = async (id) => {
  const response = await axiosInstance.get(`/movie/${id}`);
  return response.data;
};

export const fetchMovieCredits = async (id) => {
  const response = await axiosInstance.get(`/movie/${id}/credits`);
  return response.data;
};

export const fetchMovieReviews = async (id) => {
  const response = await axiosInstance.get(`/movie/${id}/reviews`);
  return response.data;
};
