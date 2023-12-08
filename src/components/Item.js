import React from "react";
import PropTypes from "prop-types";

function Item(props){
  return(
    <React.Fragment>
      <p>{props.name}{props.price}{props.quantity}</p>
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
}

export default Item;