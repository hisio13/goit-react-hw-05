import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';
import { IMAGE_BASE_URL } from '../../services/api';

export default function MovieList({ movies }) {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {movies.map(({ id, title, poster_path }) => (
        <li key={id} className={css.item}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <img src={IMAGE_BASE_URL + poster_path} alt={title} className={css.img} />
            <p>{title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}