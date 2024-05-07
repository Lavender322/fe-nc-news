import { ThumbsDown, ThumbsUp } from "react-feather";

function CommentItem({ comment }) {
  return (
    <div className="comment-container">
      <p className="comment-author">{comment.author}</p>
      <p className="comment-time">
        {new Date(comment.created_at).toDateString()}
      </p>
      <p className="comment-body">{comment.body}</p>
      <p className="comment-votes">
        <ThumbsUp width={16} className="thumbs-up-icon" />
        {comment.votes}
        <ThumbsDown width={16} className="thumbs-down-icon" />
      </p>
    </div>
  );
}

export default CommentItem;
