import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OrganizerLogin = () => {
  const [password, setPassword] = useState("");
  const history = useNavigate();

  // Ваша логика для проверки пароля организатора
  const handleLogin = () => {
    if (password === "organizer123") { // Пример пароля
      history.push("/organizer-dashboard");
    } else {
      alert("Неверный пароль");
    }
  };

  return (
    <div>
      <h2>Вход для Организатора</h2>
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Введите пароль" 
      />
      <button onClick={handleLogin}>Войти</button>
    </div>
  );
};

export default OrganizerLogin;
