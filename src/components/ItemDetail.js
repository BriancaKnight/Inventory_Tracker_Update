import React from 'react';
import PropTypes from 'prop-types';

function ItemDetail(props){
  const {item, onClickingEdit} = props;

  return (
    <React.Fragment>
      <h2>{item.name} Details</h2>
      <p>{item.description} 
      <br></br>${item.price} per oz.
      <br></br><em>{item.quantity} oz. left in inventory.</em></p>
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onClickingEdit: PropTypes.func,
}

export default ItemDetail;