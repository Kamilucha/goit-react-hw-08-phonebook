import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { initialContacts } from "./initialState";
import { getContactsThunk, addContactsThunk, deleteContactThunk } from "./thunk";
import {
  fn,
  handleFulfilled,
  handleFulfilledAdd,
  handleFulfilledDelete,
  handleFulfilledGet,
  handlePending,
  handleRejected,
} from 'services/funcSlice';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, handleFulfilledGet)
      .addCase(addContactsThunk.fulfilled, handleFulfilledAdd)
      .addCase(deleteContactThunk.fulfilled, handleFulfilledDelete)
      .addMatcher(isAnyOf(...fn('pending')), handlePending)
      .addMatcher(isAnyOf(...fn('rejected')), handleRejected)
      .addMatcher(isAnyOf(...fn('fulfilled')), handleFulfilled);
  },
});

export const contactsReducer = contactsSlice.reducer;

