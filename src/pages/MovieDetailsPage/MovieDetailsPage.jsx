import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { fetchMovieDetails, IMAGE_BASE_URL } from '../../services/api';
import css from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from || '/movies');
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return null;

  return (
    <div className={css.container}>
      <Link to={backLinkRef.current}>Go back</Link>
      <div className={css.details}>
        <img src={IMAGE_BASE_URL + movie.poster_path} alt={movie.title} />
        <div>
          <h2>{movie.title}</h2>
          <p>User score: {movie.vote_average}</p>
          <p>{movie.overview}</p>
          <p>Genres: {movie.genres.map(g => g.name).join(', ')}</p>
        </div>
      </div>
      <div className={css.links}>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>
      <Outlet />
    </div>
  );
}

