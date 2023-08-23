import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "api/contactsAPI";

export const getContactsThunk = createAsyncThunk('contacts/get', () => fetchContacts());

export const addContactsThunk = createAsyncThunk('contacts/create',  data  => addContact(data));

export const deleteContactThunk = createAsyncThunk('contact/delete', id => deleteContact(id));