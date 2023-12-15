import itemListReducer from '../../reducers/item-list-reducer';

describe('itemListReducer', () => {

let action;
const itemData = {
  name: 'Super Shampoo',
  price: 1.25,
  quantity: 128,
  description: 'Suds up with the worlds best shampoo!',
  id: "1"
};

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(itemListReducer({}, { type: null})).toEqual({});
  });

  test ('Should successfully add new item data to mainItemList', () => {
    const {name, price, quantity, description, id} = itemData;
    action = {
      type: 'ADD_ITEM',
      name: name,
      price: price,
      quantity: quantity,
      description: description,
      id: id
    };

    expect(itemListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        price: price,
        quantity: quantity,
        description: description,
        id: id
      }
    });
  });
});