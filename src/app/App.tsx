import { Route, Routes } from "react-router-dom";
import { LoginPage } from "pages/LoginPage";
import { RegisterPage } from "pages/RegisterPage";
import { MainPage } from "pages/MainPage/ui/MainPage/MainPage";

import './styles/index.scss';
import { ProtectedRoute } from "shared/lib/components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <div className="app light">
      <Routes>
        {/* Доступна только тогда, когда пользователь авторизован */}
        <Route path="/" element={
          <ProtectedRoute>
            {/* children */}
            <MainPage />
            {/* children */}
          </ProtectedRoute>
        } />

        {/* Доступны всегда */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
