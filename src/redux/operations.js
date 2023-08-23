// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// // axios.defaults.baseURL = "https://64d3734c67b2662bf3dc400b.mockapi.io/api/v1";

// export const fetchContacts = createAsyncThunk(
//   "contacts/fetchAll",
//   async ({name, number}, thunkAPI) => {
//     try {
//       const response = await axios.get("/contacts", { name, number });
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const addContact = createAsyncThunk(
//   "contacts/addContacts",
//   async (name, number, thunkAPI) => {
//     try {
//       const response = await axios.post("/contacts", { name, number });
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   "contacts/deleteContacts",
//   async (contactId, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/contacts/${contactId}`);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );