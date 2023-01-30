import { Unresolved } from "./Components/UnResolved";
import { Tasks } from "./Components/Tasks";
import { Header } from "./Components/Header";
import { OverwiewHeader } from "./Components/Overwiew/OverwiewHeader";
import { OverwiewCard } from "./Components/Overwiew/OverwiewCard";
import { OverwiewToday } from "./Components/Overwiew/OverwiewToday";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { Tickets } from "./Components/pages/Tickets";

function App() {
  return (
    <div className="App ">
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <Header />
              <OverwiewHeader />
              <OverwiewCard />
              <OverwiewToday />
              <div className="d-flex justify-content-center gap-4 mt-4">
                <Unresolved />
                <Tasks />
              </div>
            </>
          }
        />
        <Route path="/tickets" element={<Tickets />} />
      </Routes>
    </div>
  );
}

export default App;
