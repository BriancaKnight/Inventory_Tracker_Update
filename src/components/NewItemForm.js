import React from 'react';
import ReusableForm from './ReausableForm';

function NewItemForm(props) {
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewItemFormSubmission}
        buttonText="Add Item" />
    </React.Fragment>
  );
}

export default NewItemForm;