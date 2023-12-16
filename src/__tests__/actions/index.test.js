import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('Inventory Tracker actions', () => {
  it('deleteItem should create DELETE_ITEM action', () => {
    expect(actions.deleteItem(1)).toEqual({
      type: c.DELETE_ITEM,
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it('addItem should create ADD_ITEM action', () => {
    expect(actions.addItem({
      name: 'Super Shampoo',
      price: 1.25,
      quantity: 128,
      description: 'Suds up with the worlds best shampoo!',
      id: "1"
    })).toEqual({
      type: c.ADD_ITEM,
      name: 'Super Shampoo',
      price: 1.25,
      quantity: 128,
      description: 'Suds up with the worlds best shampoo!',
      id: "1"
    });
  });
});
