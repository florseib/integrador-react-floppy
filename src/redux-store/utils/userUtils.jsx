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
  } else {
    return { ...state };
  }
};

export const logUser = (user) => {
  return { email: user.email, token: user.token };

  return null;
};
