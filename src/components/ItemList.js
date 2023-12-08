import React from 'react';
import Item from './Item.js';
import PropTypes from 'prop-types';

const mainItemList = [
  {
    names: 'Super Shampoo',
    price: '1.25',
    quantity: '640'
  },
  {
    names: 'Bubbly Body Wash',
    price: '1',
    quantity: '640'
  },
  {
    names: 'Dazling Dish Soap',
    price: '.75',
    quantity: '640'
  },
]

function ItemList(props) {
  return (
    <React.Fragment>
      {props.mainItemList?.map((item, index) => 
      <Item
      name={item.name}
      price={item.price}
      quantity={item.quantity}
      id={item.id}
      key={item.id} />
      )}
    </React.Fragment>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.array,
}

export default ItemList;