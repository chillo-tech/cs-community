import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URI;
console.log("first", process.env.NEXT_PUBLIC_API_URI);
axios.interceptors.request.use((config) => {
  const token = process.env.NEXT_PUBLIC_TOKEN;
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

export default axios;
