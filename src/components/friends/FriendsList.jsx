import css from "./Friends.module.css";
import { FriendsListItem } from "./FriendsListItem";

export const FriendsList = ({ friends }) => (
  <>
    <ul className={css.list}>
      {friends.map((friend) => {
        return (
          <FriendsListItem
            isOnline={friend.isOnline}
            name={friend.name}
            avatar={friend.avatar}
            key={friend.id}
          />
        );
      })}
    </ul>
  </>
);
