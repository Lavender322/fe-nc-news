import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, patchArticleVote } from "../utils/api";
import { MessageSquare, Clock, ThumbsUp, ThumbsDown } from "react-feather";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../assets/groovyWalk.json";
import Comments from "./Comments";

function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [voteChange, setVoteChange] = useState(0);
  const [voteErr, setVoteErr] = useState(null);

  useEffect(() => {
    getArticleById(article_id)
      .then((res) => {
        setIsLoading(false);
        setArticle(res.data.article);
      })
      .catch((err) => {
        setIsError(true);
      });
  }, []);

  function handleVote(vote) {
    setVoteErr(null);
    setVoteChange((currentVote) => currentVote + vote);
    patchArticleVote(article_id, vote).catch((err) => {
      setVoteChange((currentCount) => currentCount - vote);
      setVoteErr("Something went wrong, please try again.");
    });
  }

  if (isError) {
    return <div>Error!</div>;
  }

  if (isLoading) {
    return <Lottie animationData={groovyWalkAnimation} loop={true} />;
  }

  return (
    <article className="article-container">
      <p className="article-title">{article.title}</p>
      <p className="article-info">
        <Clock className="clock-icon" width={14} />
        <span className="article-time">
          {new Date(article.created_at).toDateString()}
        </span>
        ·
        <MessageSquare className="article-comment-icon" width={14} />
        <span className="article-comments-count">{article.comment_count}</span>
      </p>
      <p>
        <span className="article-topic">{article.topic}</span>
      </p>
      <img src={article.article_img_url} className="article-image" />
      <p className="article-author">By {article.author}</p>
      <p className="article-body">{article.body}</p>
      <p className="article-votes">
        <button
          disabled={voteChange === 1}
          className="vote-btn thumbs-up-icon"
          onClick={() => handleVote(1)}
        >
          <ThumbsUp width={16} className="" />
        </button>
        {article.votes + voteChange}
        <button
          disabled={voteChange === -1}
          className="vote-btn thumbs-down-icon"
          onClick={() => handleVote(-1)}
        >
          <ThumbsDown width={16} className="" />
        </button>
        {voteErr && <p className="error">{voteErr}</p>}
      </p>
      <Comments />
    </article>
  );
}

export default SingleArticle;
