import React from 'react';
import NewItemForm from './NewItemForm';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';

class ItemControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainItemList: [],
      selectedItem: null
    };
  }

  handleClick = () => {
      if (this.state.selectedItem !=null) {
        this.setState({
          formVisibleOnPage: false,
          selectedItem: null
        });
      }
      else {
        this.setState(prevState => ({
          formVisibleOnPage: !prevState.formVisibleOnPage,
        }));
      }
  }

  handleAddingNewItem = (newItem) => {
    const newMainItemList = this.state.mainItemList.concat(newItem);
    this.setState({
      mainItemList: newMainItemList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.mainItemList.filter(item => item.id === id)[0];
    this.setState({ selectedItem: selectedItem });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedTicket != null) {
      currentlyVisibleState = <ItemDetail item={this.state.selectedItem} />
      buttonText = "Return to Shop";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleAddingNewItem} />
      buttonText = "Return to Shop"
    }
    else {
      currentlyVisibleState = <ItemList itemList={this.state.mainItemList} onTicketSelection={this.handleChangingSelectedItem} />;
      buttonText = "Add Item to Inventory"
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default ItemControl;