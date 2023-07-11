export const addUserToList = (state, newUser) => {
  const existingUser = state.userList.find((x) => {
    return x.email === newUser.email;
  });

  if (!existingUser && newUser.password === newUser.repeatPassword) {
    return {
      ...state,
      userList: [
        ...state.userList,
        { email: newUser.email, password: newUser.password },
      ],
      loggedUser: {
        email: newUser.email,
      },
    };
    //   return cartItems.map((item) => {
    //     return item.id === existingProduct.id
    //       ? { ...item, quantity: item.quantity - 1 }
    //       : item;
    //   });
  } else {
    return { ...state };
  }
};

export const logUser = (userList, user) => {
  const existingUser = userList.find((x) => {
    return x.email === user.email && x.password === user.password;
  });

  if (existingUser) return { email: user.email };

  return null;
};
