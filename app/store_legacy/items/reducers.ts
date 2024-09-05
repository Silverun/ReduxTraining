import {ItemActions, ItemsActionsType, ItemsState} from './types';

const initialItemsState: ItemsState = {
  items: [],
  error: null,
};

export const itemsReducer = (
  state = initialItemsState,
  action: ItemsActionsType,
) => {
  switch (action.type) {
    case ItemActions.getItems:
      return {...state, items: action.payload};
    case ItemActions.getItemsFailed:
      return {...state, error: action.payload};
    default: {
      return state;
    }
  }
};
