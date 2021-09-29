import React, { useReducer, useState } from "react";

export const dataStore = React.createContext(null);

const StoreProvider = ({ children }) => {
  const initialState = [];

  const [state, dispatch] = useReducer((state, action) => {
    const { payload } = action;

    switch (action.type) {
      case "ADD":
        const productIndexInCart = state.findIndex((product) => {
          return product.id === payload.id;
        });

        // if product is in cart already
        if (!(productIndexInCart === -1)) {
          const oldProductState = state[productIndexInCart];
          const updatedProduct = {
            ...oldProductState,
            count: oldProductState.count + payload.count,
          };

          const newState = [...state];
          newState[productIndexInCart] = updatedProduct;
          return newState;
        }
        // if product is not in cart, add it
        const firstTimeAddedProduct = {
          ...action.payload,
          count: payload.count,
        };
        return [...state, firstTimeAddedProduct];

      case "DELETE":
        return state.filter((product) => product.id !== payload.id);

      case "CHANGE_COUNT":
        return state.map((product, index) => {
          if (product.id === payload.id) {
            return {...state[index], ...payload}
          }
          return product
        });

      case "CLEAR":
        return [];
      default:
        throw new Error();
    }
  }, initialState);

  return (
    <dataStore.Provider value={{ state, dispatch }}>
      {children}
    </dataStore.Provider>
  );
};

function updateItemInArray(payload, state, index) {
  const oldItemState = state[index];
  const updatedItemState = {
    ...oldItemState,
    ...payload,
  };

  const newState = [...state];
  newState[index] = updatedItemState;
  return newState;
}

export default StoreProvider;
