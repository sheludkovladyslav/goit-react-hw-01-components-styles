import "./App.css";
import { Profile } from "./components/Profile/Profile";
import user from "./data/user.json";
import statistics from "./data/statistics.json";
import { Statistics } from "./components/statistics/Statistics";
import { FriendsList } from "./components/friends/FriendsList";
import friends from "./data/friends.json";
import { Transactions } from "./components/Transactions/Transactions";
import transactions from "./data/transactions.json";
function App() {
  return (
    <>
      <Profile user={user} />
      <Statistics statistics={statistics} />
      <FriendsList friends={friends} />
      <Transactions items={transactions} />
    </>
  );
}

export default App;
