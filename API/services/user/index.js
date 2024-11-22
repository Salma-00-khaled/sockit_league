import API from '../..';

export const registerUser = async (user) => {
  try {
    return await API.post('/users/register', user);
  } catch (error) {
    console.log({ error: error.response.data });
    // TODO: the return error sohuld be in a specific structure.
    return error;
  }
};

export const loginUser = async (user) => {
  try {
    return await API.post('/users/login', user);
  } catch (error) {
    console.log({ error: error.response.data });
    // TODO: the return error sohuld be in a specific structure.
    return error;
  }
};
