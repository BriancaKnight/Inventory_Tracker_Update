import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import itemListReducer from '../../reducers/item-list-reducer';
import * as c from './../../actions/ActionTypes';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      mainItemList: {},
      formVisibleOnPage: false
    });
  });

  test('Check that initial state of itemListReducer matches root reducer', () => {
    expect(store.getState().mainItemList).toEqual(itemListReducer(undefined, { type: null }));
  });
  
  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Check that ADD_ITEM action works for itemListReducer and root reducer', () => {
    const action = {
      type: c.ADD_ITEM,
      name: 'Super Shampoo',
      price: 1.25,
      quantity: 128,
      description: 'Suds up with the worlds best shampoo!',
      id: "1"
    }
    store.dispatch(action);
    expect(store.getState().mainItemList).toEqual(itemListReducer(undefined, action));
  });
  
  test('Check that TOGGLE_FORM action works for formVisibleReducer and root reducer', () => {
    const action = {
      type: c.TOGGLE_FORM
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });
});