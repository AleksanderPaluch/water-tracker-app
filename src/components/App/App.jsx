import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import SignInPage from "../../pages/SignInPage/SignInPage";
import SignUpPage from "../../pages/SignUpPage/SignUpPage";
import TrackerPage from "../../pages/TrackerPage/TrackerPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";


import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/tracker" element={<TrackerPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
