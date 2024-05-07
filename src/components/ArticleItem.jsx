import { MessageSquare } from "react-feather";

function ArticleItem({ article }) {
  return (
    <div className="single-item-container">
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
    </div>
  );
}

export default ArticleItem;
