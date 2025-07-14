import axiosInstance from "./axiosInstance";
import { showSuccessToast, showErrorToast } from "../utils/toastUtils";

export const registerSchool = async (formData) => {
  try {
    const payload = new FormData();

    for (const key in formData) {
      if (key === "image" && formData[key]) {
        payload.append(key, formData[key]); // only if image is selected
      } else if (key !== "image") {
        payload.append(key, formData[key]);
      }
    }

    const response = await axiosInstance.post(
      "/api/school/register-school",
      payload
    );
    showSuccessToast("School registered successfully!");
    return response.data;
  } catch (error) {
    console.error("Registration API Error:", error);
    const detail = error?.response?.data?.detail;

    if (Array.isArray(detail)) {
      const msg = detail.map((d) => d.msg).join(", ");
      showErrorToast(msg);
    } else if (typeof detail === "string") {
      showErrorToast(detail);
    } else {
      showErrorToast();
    }

    throw error;
  }
};
