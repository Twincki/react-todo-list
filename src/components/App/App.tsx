import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/Auth/LoginPage/LoginPage";
import { RegisterPage } from "../pages/Auth/RegisterPage/RegisterPage";


function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
