import React from 'react';
import Item from './Item.js';
import PropTypes from 'prop-types'; 

function ItemList(props) {
  // let CoreItems = [
  //   {
  //     name: 'Super Shampoo',
  //     price: 1.25,
  //     quantity: 128,
  //     description: 'Suds up with the worlds best shampoo!',
  //     id: "1"
  //   },
  //   {
  //     name: 'Bubbly Body Wash',
  //     price: 1,
  //     quantity: 128,
  //     description: 'Guaranteed to get you sparkling',
  //     id: "2"
  //   },
  //   {
  //     name: 'Dazling Dish Soap',
  //     price: .75,
  //     quantity: 128,
  //     description: 'So clean you could eat off of it!',
  //     id: "3"
  //   },
  // ]

  // const allItems = [...CoreItems, props.itemList];


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