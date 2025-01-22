import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import WorkoutSelection from "./pages/WorkoutSelection/WorkoutSelection";
import WorkoutDisplay from "./pages/WorkoutDisplay/WorkoutDisplay";
import WorkoutTimer from "./pages/WorkoutTimer/WorkoutTimer";
import WorkoutComplete from "./pages/WorkoutComplete/WorkoutComplete";
import UserProfileDemo from "./pages/UserProfileDemo/UserProfileDemo";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/select-workout" element={<WorkoutSelection />} />
        {/* <Route path="/display-workout" element={<WorkoutDisplay />} /> */}
        <Route path="/start-workout" element={<WorkoutTimer />} />
        <Route path="/end-workout" element={<WorkoutComplete />} />
        <Route path="/user-profile" element={<UserProfileDemo />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
