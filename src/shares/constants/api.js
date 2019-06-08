console.log('process: ', process);
console.log('process.env: ', process.env);
console.log('process.env.REACT_APP_API_URL: ', process.env.REACT_APP_API_URL);

export const GET_USERS = process.env.REACT_APP_API_URL + '/api/users';
console.log('GET_USERS: ', GET_USERS);
