import React, {
  createContext,
  useCallback,
  useEffect,
  useReducer,
} from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  getDeviceIpAddress,
  removeKeyFromStorage,
  saveKeyToStorage,
} from '../utils/setup';
import API from '../API';

export const AuthContext = createContext();

const initialState = {
  doReload: false,
  userToken: null,
  user: null,
  sections: [],
  brands: [],
  categories: [],
  states: [],
  cart: [],
  notificationPushToken: '',
};

const reducer = (context, action) => {
  switch (action.type) {
    case 'SET_CONTEXT':
      return { ...context, ...action.payload };
    case 'LOGOUT':
      return { ...initialState };
    case 'TOGGLE_RELOAD':
      return { ...context, doReload: !context.doReload };
    default:
      return context;
  }
};

export const AuthProvider = ({ children }) => {
  const [context, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const initializeContext = async () => {
      const storedContext = await loadAllKeys();
      dispatch({ type: 'SET_CONTEXT', payload: storedContext });
      fetchUserData();
      loadHomeData();
    };

    initializeContext();
    getDeviceIpAddress();
  }, [context.doReload, fetchUserData, loadHomeData]);

  const loadHomeData = useCallback(async () => {
    try {
      const [sections, shops, categories, states, products] = await Promise.all(
        [
          API.get('/section'),
          API.get('/shop/all'),
          API.get('/category'),
          API.get('/states'),
          API.get('/product'),
        ],

        await Promise.all([
          removeKeyFromStorage('sections'),
          removeKeyFromStorage('brands'),
          removeKeyFromStorage('categories'),
          removeKeyFromStorage('states'),
          removeKeyFromStorage('products'),
        ]),

        await Promise.all([
          saveKeyToStorage('sections', [
            { _id: 'All', title: 'All' },
            ...sections.data,
          ]),
          saveKeyToStorage(
            'brands',
            shops?.data.map(({ businessName, image }) => ({
              name: businessName,
              image: image.uri,
            })),
          ),
          saveKeyToStorage('categories', categories?.data),
          saveKeyToStorage('states', states?.data),
          saveKeyToStorage('products', products?.data?.products),
        ]),
      );

      loadAllKeys(); // Only call once after data is stored
    } catch (err) {
      console.error({ message: err.message });
    }
  }, []);

  const loadAllKeys = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      if (keys.length === 0) {
        console.log('Storage is empty or cleared');
        return initialState; // Return initial state if storage is empty
      }

      const keyValues = await Promise.all(
        keys.map((key) => AsyncStorage.getItem(key)),
      );
      const result = keys.reduce((acc, key, index) => {
        try {
          acc[key] = JSON.parse(keyValues[index]);
        } catch (parseError) {
          console.warn(`Failed to parse value for key ${key}:`, parseError);
          acc[key] = null; // Set to null if parsing fails
        }
        return acc;
      }, {});

      // Merge with initial state to ensure all expected keys are present
      return { ...initialState, ...result };
    } catch (error) {
      console.error('Failed to load keys from storage:', error);
      return initialState; // Return initial state on error
    }
  };

  const fetchUserData = useCallback(async () => {
    try {
      if (context?.user?._id) {
        const { data } = await API.get(`/user/${context.user._id}`);
        if (!data._id) return;

        await removeKeyFromStorage('user');
        await saveKeyToStorage('user', data);
        dispatch({ type: 'SET_CONTEXT', payload: { user: data } });
      }
    } catch (error) {
      console.error('Failed to fetch user data from backend:', error);
    }
  }, [context, dispatch]);

  const setToken = async (token) => {
    await saveKeyToStorage('userToken', token);
    dispatch({ type: 'SET_CONTEXT', payload: { userToken: token } });
  };

  const logout = async () => {
    try {
      await API.post('/user/logout', { userId: context.user._id });
      await AsyncStorage.multiRemove(['userToken', 'user']);
      dispatch({ type: 'LOGOUT' });
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  const reloadContext = () => dispatch({ type: 'TOGGLE_RELOAD' });

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: Boolean(context.userToken),
        context,
        loadHomeData,
        setToken,
        logout,
        reloadContext,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
