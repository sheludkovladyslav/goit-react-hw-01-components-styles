import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Profile } from "./components/Profile";
import user from "./data/user.json";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Profile user={user} />
    </>
  );
}

export default App;
