import css from './MovieCast.module.css';

export default function MovieCast({ cast }) {
  return (
    <ul className={css.list}>
      {cast.map(({ id, name, character, profile_path }) => (
        <li key={id} className={css.item}>
          {profile_path && (
            <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt={name} />
          )}
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
}