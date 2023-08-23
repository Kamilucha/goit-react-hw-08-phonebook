import axios from 'axios';

const URL = 'https://64d3734c67b2662bf3dc400b.mockapi.io/api/v1';

export const fetchContacts = async () => {
  const { data } = await axios.get(`${URL}/contacts`);
  
  return data;
};

export const addContact = async ({ name, number: phone }) => {
  const { data } = await axios.post(`${URL}/contacts`, { name, phone });

  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`${URL}/contacts/${id}`);

  return data;
};