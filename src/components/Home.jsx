import { useState, useEffect } from "react";
import ArticleSearch from "./ArticleSearch";
import ArticleList from "./ArticleList";
import { getAllTopics } from "../utils/api";
import { Link } from "react-router-dom";

function Home() {
  const [articles, setArticles] = useState([]);
  const [topics, setTopics] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllTopics()
      .then((res) => {
        setIsLoading(false);
        setTopics(res.data.topics);
      })
      .catch((err) => {
        setIsError(true);
      });
  }, []);
  return (
    <>
      <div className="topics-outer-container">
        <ul className="topics-container">
          <li key="Home" className="topic-container topic-active">
            <div className="topic-slug">Home</div>
          </li>
          {topics.map((topic) => {
            return (
              <li key={topic.slug} className="topic-container">
                <Link to={"/topics/" + topic.slug}>
                  <div className="topic-slug">{topic.slug}</div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

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
