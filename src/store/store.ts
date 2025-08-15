import { createSlice, configureStore } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


interface SubjectState {
  selectedSubject: string | null;
}

const initialState: SubjectState = {
  selectedSubject: null
};

const subjectSlice = createSlice({
  name: 'subject',
  initialState,
  reducers: {
    setSubject: (state, action: PayloadAction<string | null>) => {
      state.selectedSubject = action.payload;
    }
  }
});

export const { setSubject } = subjectSlice.actions;

export const store = configureStore({
  reducer: {
    subject: subjectSlice.reducer
  }
});
