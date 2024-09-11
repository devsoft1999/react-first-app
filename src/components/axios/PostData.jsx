import axios from 'axios';
import React, { useState } from 'react';

const PostData = () => {
  const [name, setName] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('https://jsonplaceholder.typicode.com/users', {
      name: name
    })
    .then(response => {
      setResponse(response.data);
      setName('');
    })
    .catch(error => {
      setError(error);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
        <button type="submit">Submit</button>
      </form>
      {response && <div>Response: {JSON.stringify(response)}</div>}
      {error && <div>Error: {error.message}</div>}
    </div>
  );
};

export default PostData;
