const reducer = (state = {}, action) => {
  const { name, price, quantity, description, id } = action;
  switch (action.type) {
    case 'ADD_ITEM':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          price: price,
          quantity: quantity,
          description: description,
          id: id
        }
      });
      default:
  return state;
    }
};

export default reducer;