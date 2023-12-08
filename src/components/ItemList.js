import React from 'react';
import Item from './Item.js';
import PropTypes from 'prop-types'; 

function ItemList(props) {
  return (
    <React.Fragment>
      {props.itemList?.map((item, index) => 
      <Item
      name={item.name}
      price={item.price}
      quantity={item.quantity}
      detail={item.detail}
      id={item.id}
      key={item.id} />
      )}
    </React.Fragment>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.array,
  onItemSelection: PropTypes.func,
}

export default ItemList;