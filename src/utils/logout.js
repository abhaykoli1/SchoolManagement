import { showSuccessToast } from "./toastUtils";

export const logout = () => {
  // Clear storage
  localStorage.removeItem("authToken");
  localStorage.removeItem("schoolId");
  localStorage.removeItem("schoolType");
  sessionStorage.clear();

  // Show toast (optional)
  showSuccessToast("Logged out successfully");

  // Redirect to login
  window.location.href = "/login";
};
