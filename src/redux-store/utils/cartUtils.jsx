export const addItemToCart = (cartItems, newItem) => {
  const existingProduct = cartItems.find((x) => {
    return x._id === newItem._id && x.email === newItem.email;
  });

  if (existingProduct) {
    return cartItems.map((item) => {
      return item._id === existingProduct._id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
  }

  return [...cartItems, { ...newItem, quantity: 1 }];
};

export const decreaseCartAmount = (cartItems, itemRemove) => {
  const existingProduct = cartItems.find((x) => {
    return x._id === itemRemove._id && x.email === itemRemove.email;
  });

  if (existingProduct.quantity > 1) {
    return cartItems.map((item) => {
      return item._id === existingProduct._id
        ? { ...item, quantity: item.quantity - 1 }
        : item;
    });
  } else if (existingProduct.quantity === 1) {
    return cartItems.filter((x) => x._id !== itemRemove._id);
  }

  return [...cartItems];
};

export const purchase = (cartItems, purchaseInfo) => {
  cartItems.forEach(element => {
    confirmPurchase(element);
  });
};

const confirmPurchase = (item) => {
  console.log(item);
}