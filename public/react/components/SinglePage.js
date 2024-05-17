/* eslint-disable multiline-ternary */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import apiURL from '../api';

const SinglePage = () => {
  const { slug } = useParams();
  const [page, setPage] = useState(null);
  const navigate = useNavigate();

  const fetchSinglePage = async (slug) => {
    try {
      const response = await axios.get(`${apiURL}/wiki/${slug}`);
      const data = response.data;
      setPage(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchSinglePage(slug);
  }, []);

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <>
      {page ? (
        <>
          <h3>{page.title}</h3>
          <p>{page.author.name}</p>
          <p>{page.author.email}</p>
          <p>Published: {page.createdAt}</p>
          <p>Content: {page.content}</p>
          <p>Tags: </p>
          {page.tags &&
            page.tags.map((tag, idx) => <p key={idx}>{tag.name}</p>)}
        </>
      ) : (
        <p>no data available</p>
      )}
      <button onClick={handleNavigate}>Go Back to WikiList</button>
    </>
  );
};

export default SinglePage;
