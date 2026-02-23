import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Store from '../pages/Store';
import ProductDetails from '../pages/ProductDetails';
import Inquiry from '../pages/Inquiry';
import Login from '../pages/Login';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Store />} />
      <Route path="/product/:slug" element={<ProductDetails />} />
      <Route path="/inquiry" element={<Inquiry />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}


