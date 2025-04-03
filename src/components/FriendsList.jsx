import { FriendsListItem } from "./friends/FriendsListItem";

export const FriendsList = ({ friends }) => (
  <>
    <ul className="friend-list">
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
