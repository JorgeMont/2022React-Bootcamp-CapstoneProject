import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';
import Homepage from './Pages/Homepage';
import ProductList from './Pages/ProductList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      {['/', '/home'].map((path, index) => {
        return (
          <Route path={path} element={<App />} key={index}>
            <Route index element={<Homepage />} />
            <Route path="products" element={<ProductList />} />
          </Route>
        );
      })}

    </Routes>
  </BrowserRouter>
)

