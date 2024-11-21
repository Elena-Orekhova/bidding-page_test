import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OrganizerLogin = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Логика проверки пароля организатора
  const handleLogin = () => {
    if (password === "organizer123") { // Пример пароля
      navigate("/organizer-dashboard");
    } else {
      alert("Неверный пароль");
    }
  };

  return (
    <div className="organizer-login">
      <h2 className="organizer-login__title">Вход для Организатора</h2>
      <input 
        className="organizer-login__input"
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Введите пароль" 
      />
      <button 
        className="organizer-login__button" 
        onClick={handleLogin}
      >
        Войти
      </button>
    </div>
  );
};

export default OrganizerLogin;
