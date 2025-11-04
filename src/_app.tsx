import { Profile } from "./components/profile";
import "./index.css";

function App() {
  return (
    <>
      <div className="container w-full max-w-3xl bg-blue-200 mx-auto p-5 mt-20">
        <h1 className="text-center mt-10 text-2xl font-semibold">
          Welcome, Mindflow
        </h1>
        <div className="mt-20">
          <Profile user="Bando" />
          <Profile user="Mega" />
          <Profile user="Kusuma" />
        </div>
      </div>
    </>
  );
}

export default App;
