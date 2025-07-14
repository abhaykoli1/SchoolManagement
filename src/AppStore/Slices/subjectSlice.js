import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Api/axiosInstance";
import { showErrorToast, showSuccessToast } from "../../utils/toastUtils";

//Thunks

// Add Subject
export const addSubject = createAsyncThunk(
  "subject/addSubject",
  async (subjectData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/subject/add", subjectData);
      showSuccessToast(response.data.message || "Subject added successfully");
      return response.data;
    } catch (err) {
      showErrorToast(err.response?.data?.detail || "Failed to add subject");
      return rejectWithValue(err.response?.data?.detail || err.message);
    }
  }
);

// Get All Subjects by Class ID
export const getSubjectsByClass = createAsyncThunk(
  "subject/getSubjectsByClass",
  async (classId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `/subject/get-all-by-class/${classId}`
      );
      return response.data;
    } catch (err) {
      showErrorToast(err.response?.data?.detail || "Failed to fetch subjects");
      return rejectWithValue(err.response?.data?.detail || err.message);
    }
  }
);

// Get Subject by ID
export const getSubjectById = createAsyncThunk(
  "subject/getSubjectById",
  async (subjectId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/subject/get-all/${subjectId}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.detail || err.message);
    }
  }
);

// Update Subject
export const updateSubject = createAsyncThunk(
  "subject/updateSubject",
  async ({ subjectId, updateData }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(
        `/subject/update/${subjectId}`,
        updateData
      );
      showSuccessToast("Subject updated successfully");
      return response.data;
    } catch (err) {
      showErrorToast(err.response?.data?.detail || "Update failed");
      return rejectWithValue(err.response?.data?.detail || err.message);
    }
  }
);

// Delete Subject
export const deleteSubject = createAsyncThunk(
  "subject/deleteSubject",
  async (subjectId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(
        `/subject/delete/${subjectId}`
      );
      showSuccessToast("Subject deleted successfully");
      return { subjectId };
    } catch (err) {
      showErrorToast(err.response?.data?.detail || "Delete failed");
      return rejectWithValue(err.response?.data?.detail || err.message);
    }
  }
);

const subjectSlice = createSlice({
  name: "subject",
  initialState: {
    subjects: [],
    selectedSubject: null,
    loading: false,
    error: null,
    successMessage: null,
  },
  reducers: {
    clearSubjectMessages: (state) => {
      state.error = null;
      state.successMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Add
      .addCase(addSubject.pending, (state) => {
        state.loading = true;
      })
      .addCase(addSubject.fulfilled, (state, action) => {
        state.loading = false;
        state.subjects.push(action.payload);
        state.successMessage = "Subject added successfully";
      })
      .addCase(addSubject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Get by Class
      .addCase(getSubjectsByClass.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSubjectsByClass.fulfilled, (state, action) => {
        state.loading = false;
        state.subjects = action.payload;
      })
      .addCase(getSubjectsByClass.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Get by ID
      .addCase(getSubjectById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSubjectById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedSubject = action.payload;
      })
      .addCase(getSubjectById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Update
      .addCase(updateSubject.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateSubject.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = "Subject updated successfully";
        state.subjects = state.subjects.map((subj) =>
          subj.id === action.payload.id ? action.payload : subj
        );
      })
      .addCase(updateSubject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete
      .addCase(deleteSubject.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteSubject.fulfilled, (state, action) => {
        state.loading = false;
        state.subjects = state.subjects.filter(
          (s) => s.id !== action.payload.subjectId
        );
        state.successMessage = "Subject deleted";
      })
      .addCase(deleteSubject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearSubjectMessages } = subjectSlice.actions;
export default subjectSlice.reducer;
