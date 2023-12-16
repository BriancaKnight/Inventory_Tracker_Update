import itemListReducer from '../../reducers/item-list-reducer';
import * as c from './../../actions/ActionTypes';

describe('itemListReducer', () => {

  const currentState = {
    1: {
      name: 'Super Shampoo',
      price: 1.25,
      quantity: 128,
      description: 'Suds up with the worlds best shampoo!',
      id: "1"
    }, 2: {
      name: 'Bubbly Body Wash',
      price: 1,
      quantity: 128,
      description: 'Guaranteed to get you sparkling',
      id: "2"
    }
  }

  let action;
  const itemData = {
    name: 'Super Shampoo',
    price: 1.25,
    quantity: 128,
    description: 'Suds up with the worlds best shampoo!',
    id: "1"
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(itemListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new item data to mainItemList', () => {
    const { name, price, quantity, description, id } = itemData;
    action = {
      type: c.ADD_ITEM,
      name: name,
      price: price,
      quantity: quantity,
      description: description,
      id: id
    };

    expect(itemListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        price: price,
        quantity: quantity,
        description: description,
        id: id
      }
    });
  });

  test("Should successfully delete an item", () => {
    action = {
      type: c.DELETE_ITEM,
      id: 1
    };
    expect(itemListReducer(currentState, action)).toEqual({
      2: {
        name: 'Bubbly Body Wash',
        price: 1,
        quantity: 128,
        description: 'Guaranteed to get you sparkling',
        id: "2"
      }
    });
  });

});