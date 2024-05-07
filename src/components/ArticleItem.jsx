import { MessageSquare } from "react-feather";
import { Link } from "react-router-dom";

function ArticleItem({ article }) {
  return (
    <Link to={`/articles/${article.article_id}`}>
      <section className="single-item-container">
        <img src={article.article_img_url} className="item-image" />
        <div className="single-item-text-container">
          <p className="item-title">{article.title}</p>
          <p className="item-info">
            <span className="item-topic">{article.topic}</span>
            ·
            <MessageSquare className="comment-icon" width={14} />
            {article.comment_count}
          </p>
        </div>
      </section>
    </Link>
  );
}

export default ArticleItem;
