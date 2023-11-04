import commentReducer from "./comment.reducer";

describe("testing commentReducer", () => {
  it("should add a new comment to the comments array", () => {
    const initialState = {
      comments: []
    };

    const action = {
      type: "ADD_COMMENT",
      payload: {
        id: 1,
        text: "xyz",
        votes: 0,
        replies: []
      }
    };
    const updatedState = commentReducer(initialState, action);
    expect(updatedState).toEqual({
      comments: [
        {
          id: 1,
          text: "xyz",
          votes: 0,
          replies: []
        }
      ]
    });
  });

  it("should add a remove comment from comments array", () => {
    const initialState = {
      comments: [
        {
          id: 1,
          text: "xyz",
          votes: 0,
          replies: []
        }
      ]
    };

    const action = {
      type: "REMOVE_COMMENT",
      payload: {
        id: 1,
        text: "xyz",
        votes: 0,
        replies: []
      }
    };
    const updatedState = commentReducer(initialState, action);
    expect(updatedState).toEqual({
      comments: []
    });
  });
  it("should upvote for particular comment", () => {
    const initialState = {
      comments: [
        {
          id: 1,
          text: "xyz",
          votes: 0,
          replies: []
        }
      ]
    };

    const action = {
      type: "UPVOTE_COMMENT",
      payload: 1
    };
    const updatedState = commentReducer(initialState, action);
    expect(updatedState).toEqual({
      comments: [
        {
          id: 1,
          text: "xyz",
          votes: 1,
          replies: []
        }
      ]
    });
  });

  it("should add a new reply to the comment", () => {
    const initialState = {
      comments: [
        {
          id: 3,
          text: "lsad",
          votes: 0,
          replies: []
        }
      ]
    };

    const action = {
      type: "ADD_REPLY",
      payload: {
        id: 3,
        reply: {
          id: 1,
          replyText: "agreed"
        }
      }
    };
    const updatedState = commentReducer(initialState, action);
    expect(updatedState).toEqual({
      comments: [
        {
          id: 3,
          text: "lsad",
          votes: 0,
          replies: [
            {
              id: 1,
              replyText: "agreed"
            }
          ]
        }
      ]
    });
  });
  it("should remove reply from the comment", () => {
    const initialState = {
      comments: [
        {
          id: 3,
          text: "lsad",
          votes: 0,
          replies: [
            {
              id: 1,
              replyText: "agreed"
            }
          ]
        }
      ]
    };

    const action = {
      type: "REMOVE_REPLY",
      payload: {
        id: 3,
        reply: {
          id: 1,
          replyText: "agreed"
        }
      }
    };
    const updatedState = commentReducer(initialState, action);
    expect(updatedState).toEqual({
      comments: [
        {
          id: 3,
          text: "lsad",
          votes: 0,
          replies: []
        }
      ]
    });
  });
  it("should downvote for particular comment", () => {
    const initialState = {
      comments: [
        {
          id: 1,
          text: "xyz",
          votes: 6,
          replies: []
        }
      ]
    };

    const action = {
      type: "DOWNVOTE_COMMENT",
      payload: 1
    };
    const updatedState = commentReducer(initialState, action);
    expect(updatedState).toEqual({
      comments: [
        {
          id: 1,
          text: "xyz",
          votes: 5,
          replies: []
        }
      ]
    });
  });
});
