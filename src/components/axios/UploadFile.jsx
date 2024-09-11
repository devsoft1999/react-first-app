import axios from 'axios';
import React, { useState } from 'react';

const UploadFile = () => {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', file);

    axios.post('https://example.com/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      setResponse(response.data);
    })
    .catch(error => {
      setError(error);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {response && <div>Response: {JSON.stringify(response)}</div>}
      {error && <div>Error: {error.message}</div>}
    </div>
  );
};

export default UploadFile;
