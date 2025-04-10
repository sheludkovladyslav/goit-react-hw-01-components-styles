import css from "./Friends.module.css";

export const FriendsListItem = ({ avatar, name, isOnline }) => {
  const isOnlineFunc = (isOnline) => {
    if (isOnline) {
      return <p className={css.online}></p>;
    } else {
      return <p className={css.offline}></p>;
    }
  };

  console.log(isOnline);

  return (
    <li className={css.item}>
      {isOnlineFunc(isOnline)}
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
