const initialState = {
  comments: []
};

function commentReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_COMMENT":
      return { ...state, comments: [...state.comments, action.payload] };

    case "REMOVE_COMMENT":
      return {
        ...state,
        comments: state.comments.filter(({ id }) => id !== action.payload.id)
      };

    case "UPVOTE_COMMENT": {
      return {
        ...state,
        comments: state.comments.reduce((allComments, currentComment) => {
          return currentComment.id === action.payload
            ? [
                ...allComments,
                {
                  ...currentComment,
                  votes: currentComment.votes + 1
                }
              ]
            : [...allComments, currentComment];
        }, [])
      };
    }

    case "ADD_REPLY": {
      return {
        ...state,
        comments: state.comments.reduce((allComments, currentComment) => {
          return currentComment.id === action.payload.id
            ? [
                ...allComments,
                {
                  ...currentComment,
                  replies: [...currentComment.replies, action.payload.reply]
                }
              ]
            : [...allComments, currentComment];
        }, [])
      };
    }

    case "REMOVE_REPLY": {
      return {
        ...state,
        comments: state.comments.reduce((allComments, currentComment) => {
          return currentComment.id === action.payload.id
            ? [
                ...allComments,
                {
                  ...currentComment,
                  replies: currentComment.replies.filter(
                    ({ id }) => id !== action.payload.reply.id
                  )
                }
              ]
            : [...allComments, currentComment];
        }, [])
      };
    }
    case "DOWNVOTE_COMMENT": {
      return {
        ...state,
        comments: state.comments.reduce((allComments, currentComment) => {
          return currentComment.id === action.payload
            ? [
                ...allComments,
                {
                  ...currentComment,
                  votes: currentComment.votes - 1
                }
              ]
            : [...allComments, currentComment];
        }, [])
      };
    }
    default:
      return state;
  }
}

export default commentReducer;
