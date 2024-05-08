import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../contexts/Auth";
import { useParams } from "react-router-dom";
import CommentList from "./CommentList";
import { getCommentsByArticleId, postComment } from "../utils/api";

function Comments() {
  const { user } = useContext(AuthContext);

  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [commentBody, setCommentBody] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isPostLoading, setIsPostLoading] = useState(false);
  const [isPostDone, setIsPostDone] = useState(false);
  const [postErrorMsg, setPostErrorMsg] = useState("");

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

  function handleSubmit(e) {
    e.preventDefault();
    setIsPostLoading(true);
    setPostErrorMsg("");
    setIsPostDone(false);
    postComment(article_id, user.username, commentBody)
      .then((res) => {
        setIsPostLoading(false);
        setIsPostDone(true);
        setTimeout(() => {
          setIsPostDone(false);
        }, 3000);
        setCommentBody("");
        setComments([res.data.comment, ...comments]);
      })
      .catch((err) => {
        setIsPostLoading(false);
        setPostErrorMsg(err.response.data.msg);
      });
  }

  return (
    <>
      <h1 className="comments-heading">{`Comments (${comments.length})`}</h1>
      <form
        className="add-comment-form"
        method="post"
        onSubmit={(e) => handleSubmit(e)}
      >
        <textarea
          rows={4}
          placeholder="Add your comments..."
          onChange={(e) => setCommentBody(e.target.value)}
          value={commentBody}
        />
        {commentBody && (
          <div className="post-comment-info">
            <button>Post</button>
            {isPostLoading && <p className="processing">Processing...</p>}
            {postErrorMsg && <p className="error">{postErrorMsg}</p>}
          </div>
        )}
        {isPostDone && <p className="success">Posted!</p>}
      </form>
      <CommentList
        comments={comments}
        isError={isError}
        isLoading={isLoading}
      />
    </>
  );
}

export default Comments;
