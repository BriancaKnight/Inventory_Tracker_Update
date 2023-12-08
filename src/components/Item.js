import React from "react";
import PropTypes from "prop-types";

function Item(props){
  return(
    <React.Fragment>
      <div onClick = {() => props.whenItemClicked(props.id)}>
      <p>{props.name}{props.price}{props.quantity}</p>
      </div>
    </React.Fragment>

  );
}

Item.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  detail: PropTypes.string,
  id: PropTypes.string,
  whenItemClicked: PropTypes.func
};

export default Item;