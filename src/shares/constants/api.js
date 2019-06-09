console.log('process: ', process);
console.log('process.env: ', process.env);
console.log('process.env.REACT_APP_API_URL: ', process.env.REACT_APP_API_URL);

export const LOGIN = process.env.REACT_APP_API_URL + '/api/v1/hub/h5/login';
export const LOGOUT = process.env.REACT_APP_API_URL + '/api/v1/hub/h5/logout';
export const INVITEES = process.env.REACT_APP_API_URL + '/api/v1/hub/h5/invitees';
export const EVENTS = process.env.REACT_APP_API_URL + '/api/v1/hub/h5/events';
export const PERFORMANCE = process.env.REACT_APP_API_URL + '/api/v1/hub/h5/performance';
