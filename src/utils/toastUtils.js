// src/utils/toastUtils.js
import { toast } from "react-toastify";

export const showSuccessToast = (message = "Success!") => {
  toast.success(message, {
    position: "top-right",
    autoClose: 3000,
  });
};

export const showErrorToast = (message = "Something went wrong") => {
  toast.error(message, {
    position: "top-right",
    autoClose: 4000,
  });
};
