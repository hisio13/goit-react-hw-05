import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../services/api';
import MovieList from '../../components/MovieList/MovieList';
import css from './MoviesPage.module.css';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    if (query) {
      searchMovies(query).then(setMovies);
    }
  }, [query]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const queryValue = evt.target.elements.query.value;
    setSearchParams({ query: queryValue });
  };

  return (
    <div className={css.container}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input type="text" name="query" defaultValue={query} />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
}
