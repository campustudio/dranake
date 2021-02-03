import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';

const fetchUsers = page => axios.get(`https://randomuser.me/api?page=${page}&results=5`)
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

let pageNum = 0;

const scrollList = () => {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const refreshUsers = () => {
    setLoading(true);
    fetchUsers(++pageNum).then((rs) => {
      setUsers(rs);
      setLoading(false);
    });
  };

  useEffect(() => {
    refreshUsers();
  }, []);

  return (
    <article className="list-container">
      <header>
        <h3>{counter}</h3>
        <button type="button" onClick={() => setCounter(counter + 1)}>Increment</button>
      </header>
      <hr />
      <p>
        <button type="button" onClick={() => refreshUsers()}>Next Page</button>
      </p>
      {
        loading
          ? (
            <div>loading...</div>
          ) : (
            <ul>
              {
                users.map((u, i) => {
                  const { picture: { thumbnail }, login: { username } } = u;

                  return (
                    <li key={i}>
                      <p>
                        <img src={thumbnail} alt="thumbnail" style={{ width: 48, height: 48, marginRight: 10 }} />
                        {username}
                      </p>
                    </li>
                  );
                })
              }
            </ul>
          )
      }
    </article>
  );
};

export default scrollList;
