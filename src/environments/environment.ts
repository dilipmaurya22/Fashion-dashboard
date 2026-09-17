// API URL follows whatever host the app is opened from:
//  - http://localhost:4200        -> API http://localhost:5129/api
//  - http://192.168.1.6:4200      -> API http://192.168.1.6:5129/api  (mobile / tablet on same Wi-Fi)
const host = typeof window !== 'undefined' && window.location?.hostname
  ? window.location.hostname
  : 'localhost';

export const environment = {
  production: false,
  apiUrl: `http://localhost:5134/api`,
};
