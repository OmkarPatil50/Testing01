import bookmarkReducer from "./bookmark.reducer";

describe("testing bookmarkReducer", () => {
  it("should add a new bookmark to the bookmarks array", () => {
    const initialState = {
      bookmarks: []
    };

    const action = {
      type: "ADD_BOOKMARK",
      payload: {
        id: 1,
        title: "xyz",
        url: "xyz@abc.com",
        tags: []
      }
    };
    const updatedState = bookmarkReducer(initialState, action);
    expect(updatedState).toEqual({
      bookmarks: [
        {
          id: 1,
          title: "xyz",
          url: "xyz@abc.com",
          tags: []
        }
      ]
    });
  });

  it("should add a remove bookmark from bookmarks array", () => {
    const initialState = {
      bookmarks: [
        {
          id: 1,
          title: "xyz",
          url: "xyz@abc.com",
          tags: []
        }
      ]
    };

    const action = {
      type: "REMOVE_BOOKMARK",
      payload: {
        id: 1,
        title: "xyz",
        url: "xyz@abc.com",
        tags: []
      }
    };
    const updatedState = bookmarkReducer(initialState, action);
    expect(updatedState).toEqual({
      bookmarks: []
    });
  });
  it("should update tag for particular bookmark", () => {
    const initialState = {
      bookmarks: [
        {
          id: 1,
          title: "xyz",
          url: "xyz@abc.com",
          tags: [
            {
              id: 1,
              name: "socal"
            }
          ]
        }
      ]
    };

    const action = {
      type: "UPDATE_TAGS",
      payload: {
        id: 1,
        tag: {
          id: 1,
          name: "Social"
        }
      }
    };
    const updatedState = bookmarkReducer(initialState, action);
    expect(updatedState).toEqual({
      bookmarks: [
        {
          id: 1,
          title: "xyz",
          url: "xyz@abc.com",
          tags: [
            {
              id: 1,
              name: "Social"
            }
          ]
        }
      ]
    });
  });
  it("should filter bookmarks based on tag", () => {
    const initialState = {
      bookmarks: [
        {
          id: 1,
          title: "xyz",
          url: "xyz@abc.com",
          tags: [
            {
              id: 1,
              name: "HTML"
            },
            {
              id: 2,
              name: "Webdev"
            },
            {
              id: 1,
              name: "React"
            }
          ]
        },
        {
          id: 2,
          title: "kls",
          url: "kls@abc.com",
          tags: [
            {
              id: 2,
              name: "Webdev"
            },
            {
              id: 1,
              name: "React"
            }
          ]
        },
        {
          id: 3,
          title: "lsad",
          url: "lsad@abc.com",
          tags: []
        }
      ]
    };

    const action = {
      type: "FILTER_BOOKMARKS_BY_TAG",
      payload: "React"
    };
    const updatedState = bookmarkReducer(initialState, action);
    expect(updatedState).toEqual({
      bookmarks: [
        {
          id: 1,
          title: "xyz",
          url: "xyz@abc.com",
          tags: [
            {
              id: 1,
              name: "HTML"
            },
            {
              id: 2,
              name: "Webdev"
            },
            {
              id: 1,
              name: "React"
            }
          ]
        },
        {
          id: 2,
          title: "kls",
          url: "kls@abc.com",
          tags: [
            {
              id: 2,
              name: "Webdev"
            },
            {
              id: 1,
              name: "React"
            }
          ]
        }
      ]
    });
  });

  it("should add a new tag to the bookmark", () => {
    const initialState = {
      bookmarks: [
        {
          id: 3,
          title: "lsad",
          url: "lsad@abc.com",
          tags: []
        }
      ]
    };

    const action = {
      type: "ADD_TAG",
      payload: {
        id: 3,
        tag: {
          id: 1,
          name: "Social"
        }
      }
    };
    const updatedState = bookmarkReducer(initialState, action);
    expect(updatedState).toEqual({
      bookmarks: [
        {
          id: 3,
          title: "lsad",
          url: "lsad@abc.com",
          tags: [
            {
              id: 1,
              name: "Social"
            }
          ]
        }
      ]
    });
  });
  it("should add a remove tag from the bookmark", () => {
    const initialState = {
      bookmarks: [
        {
          id: 3,
          title: "lsad",
          url: "lsad@abc.com",
          tags: [
            {
              id: 1,
              name: "Social"
            }
          ]
        }
      ]
    };

    const action = {
      type: "REMOVE_TAG",
      payload: {
        id: 3,
        tag: {
          id: 1,
          name: "Social"
        }
      }
    };
    const updatedState = bookmarkReducer(initialState, action);
    expect(updatedState).toEqual({
      bookmarks: [
        {
          id: 3,
          title: "lsad",
          url: "lsad@abc.com",
          tags: []
        }
      ]
    });
  });
});
