import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workout" element={<WorkoutSelection />} />
          <Route path="/workout/display" element={<WorkoutDisplay />} />
          <Route path="/workout/player" element={<WorkoutPlayer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
