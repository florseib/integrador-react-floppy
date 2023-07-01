export const addItemToCart = (cartItems, newItem) => {
  const existingProduct = cartItems.find((x) => {
    return x.id === newItem.id;
  });

  if (existingProduct) {
    return cartItems.map((item) => {
      return item.id === existingProduct.id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
  }

  return [...cartItems, { ...newItem, quantity: 1 }];
};

export const decreaseCartAmount = (cartItems, itemId) => {
  const existingProduct = cartItems.find((x) => {
    return x.id === itemId;
  });

  if (existingProduct.quantity > 1) {
    return cartItems.map((item) => {
      return item.id === existingProduct.id
        ? { ...item, quantity: item.quantity - 1 }
        : item;
    });
  } else if (existingProduct.quantity === 1) {
    return cartItems.filter((x) => x.id !== itemId);
  }

  return [...cartItems];
};
