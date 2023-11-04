import cartReducer from "./cart.reducer";

describe("testing cartreducer", () => {
  it("should add item to cart", () => {
    const initialState = {
      items: [],
      totalPrice: 0,
      totalQuantity: 0,
      discounts: []
    };

    const action = {
      type: "ADD_TO_CART",
      payload: {
        id: 1,
        name: "book",
        price: 200,
        quantity: 1
      }
    };

    const updatedState = cartReducer(initialState, action);
    expect(updatedState).toEqual({
      items: [
        {
          id: 1,
          name: "book",
          price: 200,
          quantity: 1
        }
      ],
      totalPrice: 200,
      totalQuantity: 1,
      discounts: []
    });
  });
  it("should remove item from cart", () => {
    const initialState = {
      items: [
        {
          id: 1,
          name: "book",
          price: 200,
          quantity: 1
        }
      ],
      totalPrice: 200,
      totalQuantity: 1,
      discounts: []
    };

    const action = {
      type: "REMOVE_FROM_CART",
      payload: {
        id: 1,
        name: "book",
        price: 200,
        quantity: 1
      }
    };

    const updatedState = cartReducer(initialState, action);
    expect(updatedState).toEqual({
      items: [],
      totalPrice: 0,
      totalQuantity: 0,
      discounts: []
    });
  });
  it("should update quantity of item to cart", () => {
    const initialState = {
      items: [
        {
          id: 1,
          name: "book",
          price: 200,
          quantity: 1
        }
      ],
      totalPrice: 200,
      totalQuantity: 1,
      discounts: []
    };

    const action = {
      type: "UPDATE_QUANTITY",
      payload: {
        id: 1,
        name: "book",
        price: 200,
        quantity: 1
      }
    };

    const updatedState = cartReducer(initialState, action);
    expect(updatedState).toEqual({
      items: [
        {
          id: 1,
          name: "book",
          price: 200,
          quantity: 2
        }
      ],
      totalPrice: 400,
      totalQuantity: 2,
      discounts: []
    });
  });
  it("should add discount", () => {
    const initialState = {
      items: [
        {
          id: 1,
          name: "book",
          price: 200,
          quantity: 1
        }
      ],
      totalPrice: 200,
      totalQuantity: 1,
      discounts: []
    };

    const action = {
      type: "ADD_DISCOUNT",
      payload: {
        id: 1,
        name: "50 Rs OFF",
        value: 50
      }
    };

    const updatedState = cartReducer(initialState, action);
    expect(updatedState).toEqual({
      items: [
        {
          id: 1,
          name: "book",
          price: 200,
          quantity: 1
        }
      ],
      totalPrice: 150,
      totalQuantity: 1,
      discounts: [
        {
          id: 1,
          name: "50 Rs OFF",
          value: 50
        }
      ]
    });
  });
  it("should add promotion", () => {
    const initialState = {
      items: [
        {
          id: 1,
          name: "book",
          price: 200,
          quantity: 1
        }
      ],
      totalPrice: 200,
      totalQuantity: 1,
      discounts: []
    };

    const action = {
      type: "APPLY_PROMOTION",
      payload: {
        id: 1,
        name: "100 Rs OFF",
        value: 100
      }
    };

    const updatedState = cartReducer(initialState, action);
    expect(updatedState).toEqual({
      items: [
        {
          id: 1,
          name: "book",
          price: 200,
          quantity: 1
        }
      ],
      totalPrice: 100,
      totalQuantity: 1,
      discounts: [
        {
          id: 1,
          name: "100 Rs OFF",
          value: 100
        }
      ]
    });
  });
  it("should remove discount", () => {
    const initialState = {
      items: [
        {
          id: 1,
          name: "book",
          price: 200,
          quantity: 1
        }
      ],
      totalPrice: 150,
      totalQuantity: 1,
      discounts: [
        {
          id: 1,
          name: "50 Rs OFF",
          value: 50
        }
      ]
    };
    const action = {
      type: "REMOVE_DISCOUNT",
      payload: {
        id: 1,
        name: "50 Rs OFF",
        value: 50
      }
    };

    const updatedState = cartReducer(initialState, action);
    expect(updatedState).toEqual({
      items: [
        {
          id: 1,
          name: "book",
          price: 200,
          quantity: 1
        }
      ],
      totalPrice: 200,
      totalQuantity: 1,
      discounts: []
    });
  });
});
