import React from 'react';
import { Page } from './Page';
import { Link } from 'react-router-dom';

export const PagesList = ({ pages }) => {
  return (
    <>
      {pages.map((page, idx) => {
        return (
          <Link to={`/pages/${page.slug}`} key={idx}>
            <Page page={page} />
          </Link>
        );
      })}
    </>
  );
};
