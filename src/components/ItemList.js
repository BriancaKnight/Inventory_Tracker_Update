import React from 'react';
import Item from './Item.js';
import PropTypes from 'prop-types'; 

function ItemList(props) {

  return (
    <React.Fragment>
      {Object.values(props.itemList).map((item) => 
      <Item
      whenItemClicked={props.onItemSelection}
      name={item.name}
      price={item.price}
      quantity={item.quantity}
      description={item.description}
      id={item.id}
      key={item.id} />
      )}
    </React.Fragment>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.object,
  onItemSelection: PropTypes.func,
}

export default ItemList;