import * as c from './../actions/ActionTypes';

const defaultState = {
  "1": {
    name: 'Super Shampoo',
    price: 1.25,
    quantity: 128,
    description: 'Suds up with the worlds best shampoo!',
    id: "1"
  },
  "2": {
    name: 'Bubbly Body Wash',
    price: 1,
    quantity: 128,
    description: 'Guaranteed to get you sparkling',
    id: "2"
  },
  "3": {
    name: 'Dazling Dish Soap',
    price: .75,
    quantity: 128,
    description: 'So clean you could eat off of it!',
    id: "3"
  },
}

const reducer = (state = defaultState,  action) => {

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