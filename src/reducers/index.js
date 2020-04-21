const initialState = {};
///main reducer..... where my actions get reference too
export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      return {
        ...state,
        [action.item.id]: {
          ...action.item,

          /// run a ternary function to see whether to add +1 to our counter
          // the action function remains the same
          quantity:
            state[action.item.id] && state[action.item.id].quantity
              ? state[action.item.id].quantity + 1
              : 1,
        },
      };
    }
    case "REMOVE_ITEM": {
      const someCopy = { ...state };
      delete someCopy[action.itemId];
      return someCopy;
    }

    case "UPDATE_QUANTITY": {
      const { itemId, newQuantity } = action;
      return {
        ...state,
        [itemId]: {
          ...state[itemId],
          quantity: newQuantity,
        },
      };
    }
    default:
      return state;
  }
}

export const getStoreItemArray = (state) => Object.values(state);
