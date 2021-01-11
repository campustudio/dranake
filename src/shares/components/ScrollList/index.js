import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';

const fetchUsers = () => {
  return axios.get('https://randomuser.me/api?results=5')
    .then(({ data }) => {
      console.log('data: ', data);
      // return JSON.stringify(data, null, 2);
      return data.results;
    })
    .catch((error) => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error(error.response.data);
        console.error(error.response.status);
        console.error(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.error(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error', error.message);
      }
    });
};

const scrollList = () => {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(rs => setUsers(rs));
  }, []);

  return (
    <div className="list-container">
      <p>{counter}</p>
      <button type="button" onClick={() => setCounter(counter + 1)}>Increment</button>
      <ul>
        {
          users.map((u, i) => {
            const { picture: { thumbnail }, login: { username } } = u;

            return (
              <li key={i}>
                <img src={thumbnail} alt="thumbnail" />
                {username}
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default scrollList;
