import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/workout" element={<WorkoutSelection />} />
          <Route path="/workout/display" element={<WorkoutDisplay />} />
          <Route path="/workout/player" element={<WorkoutPlayer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
