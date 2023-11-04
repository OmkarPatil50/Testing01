import todoReducer from "./todo.reducer";

describe("testing toDoReducer", () => {
  it("should add todo", () => {
    const initialState = {
      todos: []
    };
    const action = {
      type: "ADD_TODO",
      payload: {
        id: 1,
        text: "Send Mail",
        completed: false
      }
    };

    const updatedState = todoReducer(initialState, action);

    expect(updatedState).toEqual({
      todos: [
        {
          id: 1,
          text: "Send Mail",
          completed: false
        }
      ]
    });
  });
  it("should toggle todo", () => {
    const initialState = {
      todos: [
        {
          id: 1,
          text: "Send Mail",
          completed: false
        }
      ]
    };
    const action = {
      type: "TOGGLE_TODO",
      payload: {
        id: 1,
        text: "Send Mail",
        completed: false
      }
    };

    const updatedState = todoReducer(initialState, action);

    expect(updatedState).toEqual({
      todos: [
        {
          id: 1,
          text: "Send Mail",
          completed: true
        }
      ]
    });
  });
});
