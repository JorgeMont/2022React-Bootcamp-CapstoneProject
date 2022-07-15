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
            <Route path="products" >
              <Route
                index
                element={<ProductList />}
              />
              <Route path=":searchCat" element={<ProductList />} />
            </Route>
          </Route>
        );
      })}

    </Routes>
  </BrowserRouter>
)

