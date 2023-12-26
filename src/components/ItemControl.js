import React from 'react';
import NewItemForm from './NewItemForm';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';
import EditItemForm from './EditItemForm';
import ReusableButton from './ReusableButton';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';


class ItemControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      editing: false,
      mainItemList:[],
    };
  }

  handleClick = () => {
    if (this.state.selectedItem != null) {
      this.setState({
        selectedItem: null,
        editing: false
      });
    }
    else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    };
  }

  handleAddingNewItem = (newItem) => {
    console.log('New Item:', newItem);
    const { dispatch } = this.props;
    const action = a.addItem(newItem);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.props.mainItemList[id];
    this.setState({ selectedItem: selectedItem });
  }

updateMainItemList = (itemId, newQuantity) => {
    console.log("HIT UPDATE", this.state);
    const { dispatch, mainItemList } = this.props;
    const action = a.addItem({
      ...mainItemList[itemId],
       quantity: newQuantity,
    });
    dispatch(action);
  };

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleEditingItemInList = (itemToEdit) => {
    console.log("HIT HANDLE EDIT");
    const { dispatch } = this.props;
    const action = a.addItem(itemToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedItem: null
    });
  };

  handleDeletingItem = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteItem(id);
    dispatch(action);
    this.setState({ selectedTicket: null });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState =
        <React.Fragment>
          <ItemDetail
            item={this.state.selectedItem} />
          <EditItemForm
            item={this.state.selectedItem}
            onEditItem={this.handleEditingItemInList}
          />
        </React.Fragment>
      buttonText = "Return to Shop"
    }
    else if (this.state.selectedItem != null) {
      currentlyVisibleState =
        <React.Fragment>
          <ItemDetail
            item={this.state.selectedItem}
            onClickingEdit={this.handleEditClick}
            updateMainItemList={this.updateMainItemList}
          />
          <ReusableButton
            onClick={this.handleEditClick}
            buttonText='Update Item'
          />
        </React.Fragment>
      buttonText = "Return to Shop";
    }
    else if (this.props.formVisibleOnPage) {
      currentlyVisibleState =
        <NewItemForm
          onNewItemCreation={this.handleAddingNewItem} />;
      buttonText = "Return to Shop";
    }
    else {
      currentlyVisibleState =
        <ItemList
          itemList={this.props.mainItemList}
          onItemSelection={this.handleChangingSelectedItem} />;
      buttonText = "Add Item to Inventory";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

ItemControl.propTypes = {
  mainItemList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
};

const mapStateToProps = state => {
  return {
    mainItemList: state.mainItemList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

ItemControl = connect(mapStateToProps)(ItemControl);

export default ItemControl;