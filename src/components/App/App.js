import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import OrganizerLogin from "../Organizer/OrganizerLogin"; // Страница входа для организатора
import OrganizerDashboard from "../Organizer/OrganizerDashboard"; // Страница организатора

const App = () => {
  // Пример проверки роли организатора
  const isOrganizer = false; // Здесь можно заменить на реальную логику аутентификации

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          {/* Страница главная, с параметром участника */}
          <Route path="/" element={<Main />} />
          
          {/* Страница входа для организатора */}
          <Route path="/organizer-login" element={<OrganizerLogin />} />
          
          {/* Страница для организатора, доступная только после проверки */}
          <Route 
            path="/organizer" 
            element={isOrganizer ? <OrganizerDashboard /> : <Navigate to="/organizer-login" />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
