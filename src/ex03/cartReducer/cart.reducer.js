const initialState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
  discounts: []
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        items: [...state.items, action.payload],
        totalPrice: state.totalPrice + action.payload.price,
        totalQuantity: state.totalQuantity + action.payload.quantity
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter(({ id }) => id !== action.payload.id),
        totalPrice: state.totalPrice - action.payload.price,
        totalQuantity: state.totalQuantity - action.payload.quantity
      };

    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: state.items.reduce((acc, curr) => {
          return curr.id === action.payload.id
            ? [...acc, { ...curr, quantity: curr.quantity + 1 }]
            : [...acc, curr];
        }, []),
        totalPrice: state.totalPrice + action.payload.price,
        totalQuantity: state.totalQuantity + 1
      };

    case "ADD_DISCOUNT":
      const newDiscounts = [...state.discounts, action.payload];
      const newTotalPriceWithDiscounts = calculateTotalPrice(
        state.items,
        newDiscounts,
        state.totalQuantity
      );
      return {
        ...state,
        discounts: newDiscounts,
        totalPrice: newTotalPriceWithDiscounts
      };
    case "APPLY_PROMOTION":
      const newPromotions = [...state.discounts, action.payload];
      const newTotalPriceWithPromotions = calculateTotalPrice(
        state.items,
        newPromotions,
        state.totalQuantity
      );
      return {
        ...state,
        discounts: newPromotions,
        totalPrice: newTotalPriceWithPromotions
      };

    case "REMOVE_DISCOUNT":
      const remainingDiscounts = state.discounts.filter(
        (discount) => discount.id !== action.payload.id
      );
      const newTotalPriceWithoutDiscounts = calculateTotalPrice(
        state.items,
        remainingDiscounts,
        state.totalQuantity
      );
      return {
        ...state,
        discounts: remainingDiscounts,
        totalPrice: newTotalPriceWithoutDiscounts
      };

    default:
      return state;
  }
}

function calculateTotalPrice(items, discounts, totalQuantity) {
  const totalDiscount = discounts.reduce(
    (sum, discount) => sum + discount.value,
    0
  );
  const itemTotalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalPrice = itemTotalPrice - totalDiscount;
  return totalPrice;
}

export default cartReducer;
