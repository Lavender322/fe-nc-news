import ArticleItem from "./ArticleItem";

function ArticleList({ articles, isError, isLoading }) {
  if (isError) {
    return <div>Error!</div>;
  }

  if (isLoading) {
    return (
      <></>
      // <Lottie className="loading-animation" animationData={hamsterAnimation} />
    );
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
