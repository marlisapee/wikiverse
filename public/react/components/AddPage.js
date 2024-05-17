import axios from 'axios';
import React, { useState } from 'react';
import apiURL from '../api';
import { useNavigate } from 'react-router-dom';

const AddPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [authorEmail, setAuthorEmail] = useState('');
  const navigate = useNavigate();
  // const [tags, setTags] = useState([]);

  const addForm = async (body) => {
    try {
      console.log('body: ', body);
      const request = await axios.post(`${apiURL}/wiki`, body);
      const data = request.data;
      console.log('successfully added page!', data);
      clearState();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = { title, content, name: authorName, email: authorEmail };
    addForm(body);
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  const clearState = () => {
    setTitle('');
    setContent('');
    setAuthorEmail('');
    setAuthorName('');
  };

  return (
    <>
      <h3>Add a Page</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label htmlFor="content">Content: </label>
        <input
          id="content"
          type="text"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <label htmlFor="authorName">Name: </label>
        <input
          id="authorName"
          type="text"
          value={authorName}
          onChange={(event) => setAuthorName(event.target.value)}
        />
        <label htmlFor="authorEmail">Email: </label>
        <input
          id="authorEmail"
          type="email"
          value={authorEmail}
          onChange={(event) => setAuthorEmail(event.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Add Page
        </button>
        <button onClick={handleCancel}>Cancel</button>
      </form>
    </>
  );
};

export default AddPage;
