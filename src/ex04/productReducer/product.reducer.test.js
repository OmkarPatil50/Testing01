import productReducer from "./product.reducer";

describe("testing productreducer", () => {
  it("should update category filter ", () => {
    const initialState = {
      products: [
        {
          id: 1,
          name: "Phone",
          category: "Electronics",
          price: 500,
          inStock: true
        },
        {
          id: 2,
          name: "Shirt",
          category: "Clothing",
          price: 20,
          inStock: true
        },
        {
          id: 3,
          name: "Laptop",
          category: "Electronics",
          price: 1000,
          inStock: true
        },
        {
          id: 4,
          name: "Jeans",
          category: "Clothing",
          price: 40,
          inStock: false
        }
        // ... more products
      ],
      filters: {
        category: "All",
        searchQuery: "",
        sortBy: "price",
        ascending: true,
        priceRange: { min: 0, max: 1000 }
      }
    };

    const action = {
      type: "SET_CATEGORY_FILTER",
      payload: "Clothing"
    };

    const updatedState = productReducer(initialState, action);

    expect(updatedState).toEqual({
      products: [
        {
          id: 1,
          name: "Phone",
          category: "Electronics",
          price: 500,
          inStock: true
        },
        {
          id: 2,
          name: "Shirt",
          category: "Clothing",
          price: 20,
          inStock: true
        },
        {
          id: 3,
          name: "Laptop",
          category: "Electronics",
          price: 1000,
          inStock: true
        },
        {
          id: 4,
          name: "Jeans",
          category: "Clothing",
          price: 40,
          inStock: false
        }
        // ... more products
      ],
      filters: {
        category: "Clothing",
        searchQuery: "",
        sortBy: "price",
        ascending: true,
        priceRange: { min: 0, max: 1000 }
      }
    });
  });

  it("should update search query filter ", () => {
    const initialState = {
      products: [
        {
          id: 1,
          name: "Phone",
          category: "Electronics",
          price: 500,
          inStock: true
        },
        {
          id: 2,
          name: "Shirt",
          category: "Clothing",
          price: 20,
          inStock: true
        },
        {
          id: 3,
          name: "Laptop",
          category: "Electronics",
          price: 1000,
          inStock: true
        },
        {
          id: 4,
          name: "Jeans",
          category: "Clothing",
          price: 40,
          inStock: false
        }
        // ... more products
      ],
      filters: {
        category: "All",
        searchQuery: "",
        sortBy: "price",
        ascending: true,
        priceRange: { min: 0, max: 1000 }
      }
    };
    const action = {
      type: "SET_SEARCH_QUERY",
      payload: "Phone"
    };

    const updatedState = productReducer(initialState, action);

    expect(updatedState).toEqual({
      products: [
        {
          id: 1,
          name: "Phone",
          category: "Electronics",
          price: 500,
          inStock: true
        },
        {
          id: 2,
          name: "Shirt",
          category: "Clothing",
          price: 20,
          inStock: true
        },
        {
          id: 3,
          name: "Laptop",
          category: "Electronics",
          price: 1000,
          inStock: true
        },
        {
          id: 4,
          name: "Jeans",
          category: "Clothing",
          price: 40,
          inStock: false
        }
        // ... more products
      ],
      filters: {
        category: "All",
        searchQuery: "Phone",
        sortBy: "price",
        ascending: true,
        priceRange: { min: 0, max: 1000 }
      }
    });
  });

  it("should update sorting options", () => {
    const initialState = {
      products: [
        {
          id: 1,
          name: "Phone",
          category: "Electronics",
          price: 500,
          inStock: true
        },
        {
          id: 2,
          name: "Shirt",
          category: "Clothing",
          price: 20,
          inStock: true
        },
        {
          id: 3,
          name: "Laptop",
          category: "Electronics",
          price: 1000,
          inStock: true
        },
        {
          id: 4,
          name: "Jeans",
          category: "Clothing",
          price: 40,
          inStock: false
        }
        // ... more products
      ],
      filters: {
        category: "All",
        searchQuery: "",
        sortBy: "price",
        ascending: true,
        priceRange: { min: 0, max: 1000 }
      }
    };
    const action = {
      type: "SET_SORT",
      payload: "name"
    };

    const updatedState = productReducer(initialState, action);

    expect(updatedState).toEqual({
      products: [
        {
          id: 1,
          name: "Phone",
          category: "Electronics",
          price: 500,
          inStock: true
        },
        {
          id: 2,
          name: "Shirt",
          category: "Clothing",
          price: 20,
          inStock: true
        },
        {
          id: 3,
          name: "Laptop",
          category: "Electronics",
          price: 1000,
          inStock: true
        },
        {
          id: 4,
          name: "Jeans",
          category: "Clothing",
          price: 40,
          inStock: false
        }
        // ... more products
      ],
      filters: {
        category: "All",
        searchQuery: "",
        sortBy: "name",
        ascending: true,
        priceRange: { min: 0, max: 1000 }
      }
    });
  });

  it("should update price range filter ", () => {
    const initialState = {
      products: [
        {
          id: 1,
          name: "Phone",
          category: "Electronics",
          price: 500,
          inStock: true
        },
        {
          id: 2,
          name: "Shirt",
          category: "Clothing",
          price: 20,
          inStock: true
        },
        {
          id: 3,
          name: "Laptop",
          category: "Electronics",
          price: 1000,
          inStock: true
        },
        {
          id: 4,
          name: "Jeans",
          category: "Clothing",
          price: 40,
          inStock: false
        }
        // ... more products
      ],
      filters: {
        category: "All",
        searchQuery: "",
        sortBy: "price",
        ascending: true,
        priceRange: { min: 0, max: 1000 }
      }
    };
    const action = {
      type: "SET_PRICE_RANGE",
      payload: { min: 100, max: 500 }
    };

    const updatedState = productReducer(initialState, action);

    expect(updatedState).toEqual({
      products: [
        {
          id: 1,
          name: "Phone",
          category: "Electronics",
          price: 500,
          inStock: true
        },
        {
          id: 2,
          name: "Shirt",
          category: "Clothing",
          price: 20,
          inStock: true
        },
        {
          id: 3,
          name: "Laptop",
          category: "Electronics",
          price: 1000,
          inStock: true
        },
        {
          id: 4,
          name: "Jeans",
          category: "Clothing",
          price: 40,
          inStock: false
        }
        // ... more products
      ],
      filters: {
        category: "All",
        searchQuery: "",
        sortBy: "price",
        ascending: true,
        priceRange: { min: 100, max: 500 }
      }
    });
  });

  it("should toggle availability of product ", () => {
    const initialState = {
      products: [
        {
          id: 1,
          name: "Phone",
          category: "Electronics",
          price: 500,
          inStock: true
        },
        {
          id: 2,
          name: "Shirt",
          category: "Clothing",
          price: 20,
          inStock: true
        },
        {
          id: 3,
          name: "Laptop",
          category: "Electronics",
          price: 1000,
          inStock: true
        },
        {
          id: 4,
          name: "Jeans",
          category: "Clothing",
          price: 40,
          inStock: false
        }
        // ... more products
      ],
      filters: {
        category: "All",
        searchQuery: "",
        sortBy: "price",
        ascending: true,
        priceRange: { min: 0, max: 1000 }
      }
    };
    const action = {
      type: "TOGGLE_AVAILABILITY",
      payload: 4
    };

    const updatedState = productReducer(initialState, action);

    expect(updatedState).toEqual({
      products: [
        {
          id: 1,
          name: "Phone",
          category: "Electronics",
          price: 500,
          inStock: true
        },
        {
          id: 2,
          name: "Shirt",
          category: "Clothing",
          price: 20,
          inStock: true
        },
        {
          id: 3,
          name: "Laptop",
          category: "Electronics",
          price: 1000,
          inStock: true
        },
        {
          id: 4,
          name: "Jeans",
          category: "Clothing",
          price: 40,
          inStock: true
        }
        // ... more products
      ],
      filters: {
        category: "All",
        searchQuery: "",
        sortBy: "price",
        ascending: true,
        priceRange: { min: 0, max: 1000 }
      }
    });
  });
});
