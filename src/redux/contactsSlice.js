import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';
import * as handlers from './handlers';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, handlers.handlePending)
      .addCase(fetchContacts.fulfilled, handlers.handleFetchFulfilled)
      .addCase(fetchContacts.rejected, handlers.handleRejected)
      .addCase(addContact.pending, handlers.handlePending)
      .addCase(addContact.rejected, handlers.handleRejected)
      .addCase(addContact.fulfilled, handlers.handleAddFulfilled)
      .addCase(deleteContact.pending, handlers.handlePending)
      .addCase(deleteContact.rejected, handlers.handleRejected)
      .addCase(deleteContact.fulfilled, handlers.handleDeleteFulfilled),
});

export const contactsReducer = contactsSlice.reducer;
