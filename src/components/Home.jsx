import { useState } from "react";
import ArticleSearch from "./ArticleSearch";
import ArticleList from "./ArticleList";

function Home() {
  const [articles, setArticles] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <ArticleSearch
        setArticles={setArticles}
        setIsError={setIsError}
        setIsLoading={setIsLoading}
      />
      <ArticleList
        articles={articles}
        isError={isError}
        isLoading={isLoading}
      />
    </>
  );
}

export default Home;
