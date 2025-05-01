import css from './MovieReviews.module.css';

export default function MovieReviews({ reviews }) {
  return (
    <ul className={css.list}>
      {reviews.map(({ id, author, content }) => (
        <li key={id} className={css.item}>
          <h4>{author}</h4>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
}