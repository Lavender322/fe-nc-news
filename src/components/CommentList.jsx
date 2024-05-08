import CommentItem from "./CommentItem";

function CommentList({ comments, isError, isLoading }) {
  if (isError) {
    return <div>Error fetching comments</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {comments.map((comment) => {
        return <CommentItem comment={comment} key={comment.comment_id} />;
      })}
    </ul>
  );
}

export default CommentList;
