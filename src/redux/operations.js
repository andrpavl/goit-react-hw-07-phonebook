import axios from 'axios';

axios.defaults.baseURL = 'https://64ad9e54b470006a5ec6308a.mockapi.io';

export const fetchContacts = () => async dispatch => {
  try {
    const response = await axios.get('/contacts');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
