import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ConfirmationPage, ForgotPasswordPage, LandingPage, LoginPage, ResetPasswordPage, RestaurantPage, UserPage } from "./pages";

const App = () => {
  return (
    <div className="container-lg">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/forgotPassword" element={<ForgotPasswordPage/>} />
          <Route path="/confirmation" element={<ConfirmationPage/>} />
          <Route path="/resetPassword" element={<ResetPasswordPage/>} />
          <Route path="/user" element={<UserPage/>} />
          <Route path="/restaurant" element={<RestaurantPage/>} />
        </Routes>
      </BrowserRouter>
    </div>);
};

export default App;