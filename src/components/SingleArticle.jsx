import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/api";
import { MessageSquare, Clock } from "react-feather";
import Comments from "./Comments";

function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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

  if (isError) {
    return <div>Error!</div>;
  }

  if (isLoading) {
    return <>Loading...</>;
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
      <Comments />
    </article>
  );
}

export default SingleArticle;
