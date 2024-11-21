import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AppRoutes from "../Routes/AppRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
