import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PagesList } from './PagesList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';
import SinglePage from './SinglePage';
import AddPage from './AddPage';

export const App = () => {
  const [pages, setPages] = useState([]);

  async function fetchPages() {
    try {
      const response = await fetch(`${apiURL}/wiki`);
      const pagesData = await response.json();
      setPages(pagesData);
    } catch (err) {
      console.log('Oh no an error! ', err);
    }
  }

  useEffect(() => {
    fetchPages();
  }, [pages]);

  return (
    <main>
      <h1>WikiVerse</h1>
      <h2>An interesting 📚</h2>

      <Routes>
        <Route path="/" element={<PagesList pages={pages} />} />
        <Route path="/pages/:slug" element={<SinglePage />} />
        <Route path="/addnewpage" element={<AddPage />} />
      </Routes>
    </main>
  );
};
