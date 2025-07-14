import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { URL_CONFIG } from "../../common/config";
import { showSuccessToast, showErrorToast } from "../../utils/toastUtils";

export const registerSchool = createAsyncThunk(
  "school/registerSchool",

  async ({ formData, image }, { rejectWithValue }) => {
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });

      if (image) {
        data.append("image", image);
      }

      const response = await axios.post(
        `${URL_CONFIG.API_URL}/school/register-school`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      showSuccessToast(response.data.message);
      return response.data;
    } catch (err) {
      console.log(err);
      showErrorToast(err.response?.data?.detail);
      return rejectWithValue(err.response?.data?.detail || "Server error");
    }
  }
);

const schoolSlice = createSlice({
  name: "school",
  initialState: {
    loading: false,
    success: false,
    error: null,
    message: "",
  },
  reducers: {
    clearSchoolStatus: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.message = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(registerSchool.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
        state.message = "";
      })
      .addCase(registerSchool.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = "School registered successfully!";
      })
      .addCase(registerSchool.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload || "Registration failed";
      });
  },
});

export const { clearSchoolStatus } = schoolSlice.actions;
export default schoolSlice.reducer;
