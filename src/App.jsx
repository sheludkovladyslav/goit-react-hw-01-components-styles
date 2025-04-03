import "./App.css";
import { Profile } from "./components/Profile";
import user from "./data/user.json";
import statistics from "./data/statistics.json";
import { Statistics } from "./components/Statistics";

function App() {
  return (
    <>
      <Profile user={user} />
      <Statistics statistics={statistics} />
    </>
  );
}

export default App;
