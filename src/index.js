import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import LayoutPage from './Pages/LayoutPage';
import NoPage from './Pages/NoPage';
import AboutPage from './Pages/AboutPage';
import AddNewBookPage from './Pages/AddNewBookPage';
import EditBookPage from './Pages/EditBookPage';
import BooksPage from './Pages/BooksPage';
import BookPage from './Pages/BookPage';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<HomePage />} />
          <Route path="book" element={<BooksPage />} >
            <Route path=":bookId" element={<BookPage />} />
            <Route path="new" element={<AddNewBookPage />} />
            <Route path="edit" element={<EditBookPage />} />
          </Route>
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

