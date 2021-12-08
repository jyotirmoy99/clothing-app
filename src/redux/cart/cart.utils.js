export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

//  removeItem ->
//  in this we are passing two parameters as cartItems (existing cartItems)
//  and cartItemToRemove (as the name signifies itself what it will do)

//  Now we will check if the id of the cartItem and id of
//  cartItemToRemove is equal using the find() method like ((cartItem.id!===cartItemToRemove.id))
//  and it is Stored
//  inside a variable called existingCartItem

// After finding the id we will check if the quantity of existingCartItem is equal to 1,
// then we will filter it out using the filter() method like (cartItem.id!==cartItemToRemove.id)
// So, if the id is not one that want to remove, then we want to keep them, if it does, then we will remove

// Alternatively, if the quantity is not 1 and we know there is the existing cartItem,
// we will return cartItems which will map like if the cartItem's id and the removeCartItem's id
// are same then it will decrease the quantity by 1 otherwise it will just return cartItems
