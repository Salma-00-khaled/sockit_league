import AsyncStorage from '@react-native-async-storage/async-storage';

const updateCartQuantity = async (index, quantity, cartItems, setCartItems) => {
  const updatedCart = cartItems.map((item, i) =>
    i === index ? { ...item, quantity: Math.max(1, quantity) } : item,
  );
  setCartItems(updatedCart);
  await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
};

export default updateCartQuantity;
