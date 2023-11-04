import pollReducer from "./poll.reducer";

describe("testing pollReducer", () => {
  it("should create new poll", () => {
    const initialState = {
      polls: []
    };

    const action = {
      type: "CREATE_POLL",
      payload: {
        id: 1,
        question: "Yeh Melody itni chocolaty kyu hain?",
        options: []
      }
    };

    const updatedState = pollReducer(initialState, action);

    expect(updatedState).toEqual({
      polls: [
        {
          id: 1,
          question: "Yeh Melody itni chocolaty kyu hain?",
          options: []
        }
      ]
    });
  });

  it("should add option to poll", () => {
    const initialState = {
      polls: [
        {
          id: 1,
          question: "Yeh Melody itni chocolaty kyu hain?",
          options: []
        }
      ]
    };

    const action = {
      type: "ADD_OPTION",
      payload: {
        pollId: 1,
        optionText: "Yeh raaz bhi usi ke saath chala gaya",
        votes: 0
      }
    };

    const updatedState = pollReducer(initialState, action);

    expect(updatedState).toEqual({
      polls: [
        {
          id: 1,
          question: "Yeh Melody itni chocolaty kyu hain?",
          options: [{ text: "Yeh raaz bhi usi ke saath chala gaya", votes: 0 }]
        }
      ]
    });
  });

  it("should vote for particular option in poll", () => {
    const initialState = {
      polls: [
        {
          id: 1,
          question: "Yeh Melody itni chocolaty kyu hain?",
          options: [{ text: "Yeh raaz bhi usi ke saath chala gaya", votes: 0 }]
        }
      ]
    };

    const action = {
      type: "VOTE",
      payload: {
        pollId: 1,
        optionText: "Yeh raaz bhi usi ke saath chala gaya",
        votes: 0
      }
    };

    const updatedState = pollReducer(initialState, action);

    expect(updatedState).toEqual({
      polls: [
        {
          id: 1,
          question: "Yeh Melody itni chocolaty kyu hain?",
          options: [{ text: "Yeh raaz bhi usi ke saath chala gaya", votes: 1 }]
        }
      ]
    });
  });
});
