import "./App.css";
import { Profile } from "./components/Profile";
import user from "./data/user.json";
import statistics from "./data/statistics.json";
import { Statistics } from "./components/Statistics";
import { FriendsList } from "./components/FriendsList";
import friends from "./data/friends.json";
function App() {
  return (
    <>
      <Profile user={user} />
      <Statistics statistics={statistics} />
      <FriendsList friends={friends} />
    </>
  );
}

export default App;
