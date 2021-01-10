// console.log('process: ', process);
console.log('process.env: ', process.env);
// console.log('process.env.REACT_APP_API_URL: ', process.env.REACT_APP_API_URL);

export const LOGIN = process.env.REACT_APP_API_URL + '/api/';
export const LOGOUT = process.env.REACT_APP_API_URL + '/api/';
export const INVITEES = process.env.REACT_APP_API_URL + '/api/';
export const EVENTS = process.env.REACT_APP_API_URL + '/api/';
export const PERFORMANCE = process.env.REACT_APP_API_URL + '/api/';
