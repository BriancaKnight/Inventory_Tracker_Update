import React from 'react';
import PropTypes from 'prop-types';

function ItemDetail(props){
  const {item} = props;

  return (
    <React.Fragment>
      <h2>Item Detail</h2>
      <h3>{item.name}</h3>
      <h4>{item.detail}</h4>
      <p>${item.price} per oz. {item.quantity} oz. left in inventory.</p>
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
}

export default ItemDetail;