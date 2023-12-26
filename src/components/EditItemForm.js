import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';
import ReusableButton from './ReusableButton';

function EditItemForm(props) {
  const { item } = props;
  

  function handleEditItemFormSubmission(event) {
    event.preventDefault();
   
    const updatedItem = {
      name: event.target.name.value || item.name,
      price: event.target.price.value ? parseInt(event.target.price.value) : item.price ,
      quantity: event.target.quantity.value ? parseInt(event.target.quantity.value) : item.quantity,
      description: event.target.description.value || event.target.description.value,
      id: item.id
    };
    
    props.onEditItem(updatedItem)
  }
  
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditItemFormSubmission}
        buttonText="Update Item" />
    </React.Fragment>
  );
}

EditItemForm.propTypes = {
  item: PropTypes.object,
  onEditItem: PropTypes.func
};

export default EditItemForm;