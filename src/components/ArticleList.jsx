import Lottie from "lottie-react";
import groovyWalkAnimation from "../assets/groovyWalk.json";
import ArticleItem from "./ArticleItem";

function ArticleList({ articles, isError, isLoading }) {
  if (isError) {
    return <div>Error!</div>;
  }

  if (isLoading) {
    return <Lottie animationData={groovyWalkAnimation} loop={true} />;
  }

  return (
    <ul className="item-list">
      {articles.map((article) => {
        return <ArticleItem article={article} key={article.article_id} />;
      })}
    </ul>
  );
}

export default ArticleList;
