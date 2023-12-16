import * as c from './../actions/ActionTypes';

const reducer = (state = {}, action) => {
  const { name, price, quantity, description, id } = action;
  switch (action.type) {
    case c.ADD_ITEM:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          price: price,
          quantity: quantity,
          description: description,
          id: id
        }
      });
    case c.DELETE_ITEM:
      let newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};


export default reducer;