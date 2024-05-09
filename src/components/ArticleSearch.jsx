import { useEffect } from "react";
import { getAllArticles } from "../utils/api";

function ArticleSearch({ setArticles, setIsError, setIsLoading, topic }) {
  useEffect(() => {
    getAllArticles()
      .then((res) => {
        setIsLoading(false);
        if (topic) {
          setArticles(
            res.data.articles.filter((article) => article.topic === topic)
          );
        } else {
          setArticles(res.data.articles);
        }
      })
      .catch((err) => {
        setIsError(true);
      });
  }, [topic]);

  return <div></div>;
}

export default ArticleSearch;
