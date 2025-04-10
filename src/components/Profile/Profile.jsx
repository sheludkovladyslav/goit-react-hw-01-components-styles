import css from "./Profile.module.css";

export const Profile = ({ user }) => {
  return (
    <div className={css.profile}>
      <div className={css.user}>
        <div className={css.img__wrapper}>
          <img src={user.avatar} alt={user.username} className={css.avatar} />
        </div>
        <p className={css.name}>{user.username}</p>
        <p className={css.tag}>@{user.tag}</p>
        <p className={css.location}>{user.location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.item}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{user.stats.followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{user.stats.views}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{user.stats.views}</span>
        </li>
      </ul>
    </div>
  );
};
