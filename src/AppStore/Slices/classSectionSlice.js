import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../Api/axiosInstance";
import { showErrorToast, showSuccessToast } from "../../utils/toastUtils";

// Add Class
export const addClass = createAsyncThunk(
  "classSection/addClass",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        "/class-section/add-class",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      showSuccessToast(response.data.message);
      console.log(response);
      return response.data;
    } catch (err) {
      console.log(err);
      showErrorToast(err.response?.data?.detail);
      return rejectWithValue(
        err.response?.data?.detail || "Something went wrong"
      );
    }
  }
);

// Add Section
export const addSection = createAsyncThunk(
  "classSection/addSection",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post(
        "/class-section/add-section",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      showSuccessToast(res.data.message);
      return res.data;
    } catch (err) {
      showErrorToast(err.response?.data?.detail);
      return rejectWithValue(err.response?.data?.detail || err.message);
    }
  }
);

// Get Classes
export const getClasses = createAsyncThunk(
  "classSection/getClasses",
  async (schoolId, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(
        `/class-section/get-classes/${schoolId}`
      );
      //   showSuccessToast(res.data.message);
      return res.data;
    } catch (err) {
      showErrorToast(err.response?.data?.detail);
      return rejectWithValue(err.response?.data?.detail || err.message);
    }
  }
);

// Get Sections
export const getSections = createAsyncThunk(
  "classSection/getSections",
  async (classId, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(
        `/class-section/get-sections/${classId}`
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.detail || err.message);
    }
  }
);

// Get All Sections
export const getAllSections = createAsyncThunk(
  "classSection/getAllSections",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get("/class-section/get-all-sections");
      //   showSuccessToast(res.data.message);
      return res.data;
    } catch (err) {
      showErrorToast(err.response?.data?.detail);
      return rejectWithValue(err.response?.data?.detail || err.message);
    }
  }
);

// Deactivate Class
export const deactivateClass = createAsyncThunk(
  "classSection/deactivateClass",
  async (classId, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.put(
        `/class-section/deactivate-class/${classId}`
      );
      showSuccessToast(res.data.message);
      return { ...res.data, classId };
    } catch (err) {
      showErrorToast(err.response?.data?.detail);
      return rejectWithValue(err.response?.data?.detail || err.message);
    }
  }
);

export const activateSection = createAsyncThunk(
  "classSection/activateSection",
  async (sectionId, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.put(
        `/class-section/activate-section/${sectionId}`
      );
      console.log(res);
      showSuccessToast(res.data.message);
      return { ...res.data, sectionId };
    } catch (err) {
      console.log(err);
      showErrorToast(err.response?.data?.detail);
      return rejectWithValue(err.response?.data?.detail || err.message);
    }
  }
);

// Deactivate Section
export const deactivateSection = createAsyncThunk(
  "classSection/deactivateSection",
  async (sectionId, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.put(
        `/class-section/deactivate-section/${sectionId}`
      );
      showSuccessToast(res.data.message);
      return { ...res.data, sectionId };
    } catch (err) {
      showErrorToast(err.response?.data?.detail);
      return rejectWithValue(err.response?.data?.detail || err.message);
    }
  }
);

// Slice
const classSectionSlice = createSlice({
  name: "classSection",
  initialState: {
    classes: [],
    sections: [],
    allsections: [],
    isAddingClass: false,
    isAddingSection: false,
    isFetchingClasses: false,
    isFetchingSections: false,
    error: null,
    successMessage: null,
  },
  reducers: {
    clearClassSectionMessages: (state) => {
      state.successMessage = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Add Class
      .addCase(addClass.pending, (state) => {
        state.isAddingClass = true;
        state.successMessage = null;
        state.error = null;
      })
      .addCase(addClass.fulfilled, (state, action) => {
        state.isAddingClass = false;
        state.successMessage = action.payload.message;
        state.classes.push(action.payload.data);
      })
      .addCase(addClass.rejected, (state, action) => {
        state.isAddingClass = false;
        state.error = action.payload;
      })

      // Add Section
      .addCase(addSection.pending, (state) => {
        state.isAddingSection = true;
        state.successMessage = null;
        state.error = null;
      })
      .addCase(addSection.fulfilled, (state, action) => {
        state.isAddingSection = false;
        state.successMessage = action.payload.message;
        state.sections.push(action.payload.data);
      })
      .addCase(addSection.rejected, (state, action) => {
        state.isAddingSection = false;
        state.error = action.payload;
      })

      // Get Classes
      .addCase(getClasses.pending, (state) => {
        state.isFetchingClasses = true;
        state.error = null;
      })
      .addCase(getClasses.fulfilled, (state, action) => {
        state.isFetchingClasses = false;
        state.classes = action.payload.data;
      })
      .addCase(getClasses.rejected, (state, action) => {
        state.isFetchingClasses = false;
        state.error = action.payload;
      })

      // Get Sections
      .addCase(getSections.pending, (state) => {
        state.isFetchingSections = true;
        state.error = null;
      })
      .addCase(getSections.fulfilled, (state, action) => {
        state.isFetchingSections = false;
        state.sections = action.payload.data;
      })
      .addCase(getSections.rejected, (state, action) => {
        state.isFetchingSections = false;
        state.error = action.payload;
      })

      // ✅ Get All Sections
      .addCase(getAllSections.pending, (state) => {
        state.isFetchingSections = true;
      })
      .addCase(getAllSections.fulfilled, (state, action) => {
        state.isFetchingSections = false;
        state.allsections = action.payload.data;
      })
      .addCase(getAllSections.rejected, (state, action) => {
        state.isFetchingSections = false;
        state.error = action.payload;
      })

      // Deactivate Class
      .addCase(deactivateClass.fulfilled, (state, action) => {
        state.successMessage = action.payload.message;
        state.classes = state.classes.map((cls) =>
          cls._id === action.payload.classId
            ? { ...cls, is_active: false }
            : cls
        );
      })
      .addCase(deactivateClass.rejected, (state, action) => {
        state.error = action.payload;
      })

      // Activate section
      .addCase(activateSection.fulfilled, (state, action) => {
        const index = state.sections.findIndex(
          (s) => s._id === action.payload.sectionId
        );
        if (index !== -1) {
          state.sections[index].is_active = true;
        }
        state.successMessage = action.payload.message;
      })
      .addCase(activateSection.rejected, (state, action) => {
        state.error = action.payload;
      })

      // Deactivate section
      .addCase(deactivateSection.fulfilled, (state, action) => {
        const index = state.sections.findIndex(
          (s) => s._id === action.payload.sectionId
        );
        if (index !== -1) {
          state.sections[index].is_active = false;
        }
        state.successMessage = action.payload.message;
      })
      .addCase(deactivateSection.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { clearClassSectionMessages } = classSectionSlice.actions;
export default classSectionSlice.reducer;
