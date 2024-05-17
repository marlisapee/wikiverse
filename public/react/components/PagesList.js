import React from 'react';
import { Page } from './Page';
import { Link, useNavigate } from 'react-router-dom';

export const PagesList = ({ pages }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/addnewpage');
  };

  return (
    <>
      {pages.map((page, idx) => {
        return (
          <Link to={`/pages/${page.slug}`} key={idx}>
            <Page page={page} />
          </Link>
        );
      })}
      <button onClick={handleNavigate}>Add New Page</button>
    </>
  );
};
