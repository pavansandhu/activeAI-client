import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import WorkoutSelection from "./pages/WorkoutSelection/WorkoutSelection";
import WorkoutDisplay from "./pages/WorkoutDisplay/WorkoutDisplay";
import WorkoutTimer from "./pages/WorkoutTimer/WorkoutTimer";
import WorkoutComplete from "./pages/WorkoutComplete/WorkoutComplete";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/selectworkout" element={<WorkoutSelection />} />
        <Route path="/displayworkout" element={<WorkoutDisplay />} />
        <Route path="/startworkout" element={<WorkoutTimer />} />
        <Route path="/endworkout" element={<WorkoutComplete />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
