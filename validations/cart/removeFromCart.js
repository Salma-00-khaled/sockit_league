import AsyncStorage from '@react-native-async-storage/async-storage';

const removeFromCart = async (index, cartItems, setCartItems) => {
  const updatedCart = cartItems.filter((_, i) => i !== index);
  setCartItems(updatedCart);
  await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
};

export default removeFromCart;
