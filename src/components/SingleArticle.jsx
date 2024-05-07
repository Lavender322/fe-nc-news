import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/api";
import { MessageSquare, Clock } from "react-feather";

function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [articleCreatedAt, setArticleCreatedAt] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticleById(article_id)
      .then((res) => {
        setIsLoading(false);
        setArticle(res.data.article);
        const parsedDate = new Date(res.data.article.created_at);
        setArticleCreatedAt(parsedDate.toDateString());
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
        <span className="article-time">{articleCreatedAt}</span>
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
      <p></p>
      <p></p>
    </article>
  );
}

export default SingleArticle;
