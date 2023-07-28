import axios from 'axios';

const apiBaseUrl = 'http://localhost:8080'; // Replace with your Spring Boot backend URL

const instance = axios.create({
  baseURL: apiBaseUrl,
  timeout: 15000, // Set a timeout for the requests in milliseconds
});

// Set common headers for all requests (if needed)
instance.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken');
instance.defaults.headers.common['Content-Type'] = 'application/json';
instance.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3000';

export default instance;