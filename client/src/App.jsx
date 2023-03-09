import { useEffect, useState } from "react";
import Editor from "./components/Editor";
import NavBar from "./components/NavBar";
import autoMerge from "./controllers/automergeController";
function App() {
  useEffect(() => {
    // registerToServiceWorkers();
  }, []);
  return (
    <div className="App w-screen h-screen overflow-hidden bg-primary">
      <NavBar />
      <Editor autoMerge={autoMerge} />
    </div>
  );
}

export default App;
