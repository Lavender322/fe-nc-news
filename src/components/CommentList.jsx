import { useState, useEffect } from "react";
import { getCommentsByArticleId } from "../utils/api";
import { useParams } from "react-router-dom";
import CommentItem from "./CommentItem";

function CommentList() {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getCommentsByArticleId(article_id)
      .then((res) => {
        setIsLoading(false);
        setComments(res.data.comments);
      })
      .catch((err) => {
        setIsError(true);
      });
  }, []);

  if (isError) {
    return <div>Error fetching comments</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      <h1 className="comments-heading">Comments</h1>
      {comments.map((comment) => {
        return <CommentItem comment={comment} key={comment.comment_id} />;
      })}
    </ul>
  );
}

export default CommentList;
