const initialState = {
  bookmarks: []
};

function bookmarkReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_BOOKMARK":
      return { ...state, bookmarks: [...state.bookmarks, action.payload] };

    case "REMOVE_BOOKMARK":
      return {
        ...state,
        bookmarks: state.bookmarks.filter(({ id }) => id !== action.payload.id)
      };

    case "UPDATE_TAGS": {
      return {
        ...state,
        bookmarks: state.bookmarks.reduce((allBookmarks, currentBookmark) => {
          return currentBookmark.id === action.payload.id
            ? [
                ...allBookmarks,
                {
                  ...currentBookmark,
                  tags: currentBookmark.tags.reduce((allTags, currentTag) => {
                    return currentTag.id === action.payload.tag.id
                      ? [
                          ...allTags,
                          { ...currentTag, name: action.payload.tag.name }
                        ]
                      : [...allTags, currentTag];
                  }, [])
                }
              ]
            : [...allBookmarks, currentBookmark];
        }, [])
      };
    }

    case "FILTER_BOOKMARKS_BY_TAG": {
      return {
        ...state,
        bookmarks: state.bookmarks.filter((bookmark) => {
          return bookmark.tags.some(({ name }) => name === action.payload);
        })
      };
    }

    case "ADD_TAG": {
      return {
        ...state,
        bookmarks: state.bookmarks.reduce((allBookmarks, currentBookmark) => {
          return currentBookmark.id === action.payload.id
            ? [
                ...allBookmarks,
                {
                  ...currentBookmark,
                  tags: [...currentBookmark.tags, action.payload.tag]
                }
              ]
            : [...allBookmarks, currentBookmark];
        }, [])
      };
    }

    case "REMOVE_TAG": {
      return {
        ...state,
        bookmarks: state.bookmarks.reduce((allBookmarks, currentBookmark) => {
          return currentBookmark.id === action.payload.id
            ? [
                ...allBookmarks,
                {
                  ...currentBookmark,
                  tags: currentBookmark.tags.filter(
                    ({ id }) => id !== action.payload.tag.id
                  )
                }
              ]
            : [...allBookmarks, currentBookmark];
        }, [])
      };
    }
    default:
      return state;
  }
}

export default bookmarkReducer;
