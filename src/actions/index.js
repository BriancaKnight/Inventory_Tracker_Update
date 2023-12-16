import * as c from './ActionTypes';

export const deleteItem = id => ({
  type: c.DELETE_ITEM,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addItem = (item) => {
  const { name, price, quantity, description, id } = item;
  return {
    type: c.ADD_ITEM,
    name: name,
    price: price,
    quantity: quantity,
    description: description,
    id: id
  }
}