import { useContext, useState } from "react";
import { AuthContext } from "../contexts/Auth";
import { ThumbsDown, ThumbsUp, Trash2 } from "react-feather";
import { deleteComment } from "../utils/api";

function CommentItem({ comment }) {
  const { user } = useContext(AuthContext);

  const [isHidden, setIsHidden] = useState(false);
  const [deleteErr, setDeleteErr] = useState(null);

  function handleDeleteComment(commentId) {
    setIsHidden(true);
    setDeleteErr(null);
    deleteComment(commentId).catch((err) => {
      setIsHidden(false);
      setDeleteErr("Something went wrong, please try again.");
    });
  }

  return (
    <div className={"comment-container " + (isHidden ? "hidden-comment" : "")}>
      <p className="comment-author">{comment.author}</p>
      <p className="comment-time">
        {new Date(comment.created_at).toDateString()}
      </p>
      <p className="comment-body">{comment.body}</p>
      <div className="comment-actions">
        {user.username === comment.author ? (
          <div className="delete-container">
            <Trash2
              width={18}
              className="trash-icon"
              onClick={() => handleDeleteComment(comment.comment_id)}
            />
            {deleteErr && <p className="error">{deleteErr}</p>}
          </div>
        ) : (
          <div></div>
        )}
        <div className="comment-votes">
          <ThumbsUp width={16} className="thumbs-up-icon" />
          {comment.votes}
          <ThumbsDown width={16} className="thumbs-down-icon" />
        </div>
      </div>
    </div>
  );
}

export default CommentItem;
