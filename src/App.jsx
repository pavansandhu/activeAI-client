import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import WorkoutSelection from "./pages/WorkoutSelection/WorkoutSelection";
import WorkoutDisplay from "./pages/WorkoutDisplay/WorkoutDisplay";
import WorkoutTimer from "./pages/WorkoutTimer/WorkoutTimer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/selectworkout" element={<WorkoutSelection />} />
        <Route path="/displayworkout" element={<WorkoutDisplay />} />
        <Route path="/startworkout" element={<WorkoutTimer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
