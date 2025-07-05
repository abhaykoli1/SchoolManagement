// src/utils/auth.js
export const isAuthenticated = () => {
  const token =
    localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
  return !!token;
};

export const logout = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("schoolId");
  localStorage.removeItem("schoolType");
  sessionStorage.removeItem("authToken");
};
