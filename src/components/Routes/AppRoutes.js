// src/Routes/AppRoutes.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../Main/Main";
import OrganizerLogin from "../Organizer/OrganizerLogin";
import OrganizerDashboard from "../Organizer/OrganizerDashboard";
import { Navigate } from "react-router-dom";

const isOrganizer = false; // Логика аутентификации организатора

const AppRoutes = () => (
  <Routes>
    {/* Динамический маршрут для игрока с параметром playerId */}
    <Route path="/:playerId" element={<Main />} />
    <Route path="/organizer-login" element={<Main organizer />} />
    
    {/* Страница входа для организатора */}
    {/* <Route path="/organizer-login" element={<OrganizerLogin />} /> */}
    
    {/* Страница для организатора с редиректом при отсутствии прав */}
    <Route 
      path="/organizer" 
      element={isOrganizer ? <OrganizerDashboard /> : <Navigate to="/organizer-login" />}
    />
    
    {/* Добавим редирект с главной страницы на динамический маршрут */}
    {/* <Route path="/" element={<Navigate to="/1" />} /> */}
  </Routes>
);

export default AppRoutes;
