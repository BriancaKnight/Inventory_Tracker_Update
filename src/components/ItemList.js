import React from 'react';
import Item from './Item.js';
import PropTypes from 'prop-types';

function ItemList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.ItemList.map((item, index) => 
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