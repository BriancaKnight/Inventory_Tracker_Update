import React from 'react';
import NewItemForm from './NewItemForm';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';
import EditItemForm from './EditItemForm';
import ReusableButton from './ReusableButton';
import { connect } from 'react-redux';
import PropTypes from "prop-types";


class ItemControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedItem: null,
      editing: false,
    };
  }

  handleClick = () => {
    if (this.state.selectedItem != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedItem: null,
        editing: false
      });
    }
    else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewItem = (newItem) => {
    const { dispatch } = this.props;
    const { name, price, quantity, description, id} = newItem;
    const action = {
      type: 'ADD_ITEM',
      name: name,
      price: price,
      quantity: quantity,
      description: description,
      id: id
    }
    dispatch(action);
    this.setState({formVisibleOnPage: false})
  }

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.props.mainItemList[id];
    this.setState({ selectedItem: selectedItem });
  }

  updateMainItemList = (itemId, newQuantity) => {
    this.setState(prevState => ({
      mainItemList: prevState.mainItemList.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    }));
  };

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleEditingItemInList = (itemToEdit) => {
    const { dispatch } = this.props;
    const { name, price, quantity, description, id} = itemToEdit;
    const action = {
      type: 'ADD_ITEM',
      name: name,
      price: price,
      quantity: quantity,
      description: description,
      id: id
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedItem: null
    });
  };

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
    else if (this.state.formVisibleOnPage) {
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
  mainItemList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    mainItemList: state
  }
}

ItemControl = connect(mapStateToProps)(ItemControl);

export default ItemControl;