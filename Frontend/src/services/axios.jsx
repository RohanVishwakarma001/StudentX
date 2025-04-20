import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/v1/",
  withCredentials: true,
});

export const signupUser = (userData) => {
  return api.post("auth/signup", userData);
};

export const loginUser = (userData) => {
  return api.post("auth/login", userData);
};

export const logoutUser = () => {
  return api.post("auth/logout");
};

export const getUserProfile = () => {
  return api.get("auth/profile");
};

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

export const setUser = (user) => {
  if (user) {
    api.defaults.headers.common["User"] = JSON.stringify(user);
  } else {
    delete api.defaults.headers.common["User"];
  }
};

export const setContentType = (contentType) => {
  if (contentType) {
    api.defaults.headers.common["Content-Type"] = contentType;
  } else {
    delete api.defaults.headers.common["Content-Type"];
  }
};

export default api;
