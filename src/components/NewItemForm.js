import React from 'react';
import ReusableForm from './ReusableForm';

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