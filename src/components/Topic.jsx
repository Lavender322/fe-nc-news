import { useState, useEffect } from "react";
import { getAllTopics } from "../utils/api";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ArticleSearch from "./ArticleSearch";
import ArticleList from "./ArticleList";

function Topic() {
  const { topic_slug } = useParams();

  const [topics, setTopics] = useState([]);
  const [articles, setArticles] = useState([]);
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
          <li key="Home" className="topic-container">
            <Link to={"/"}>
              <div className="topic-slug">Home</div>
            </Link>
          </li>
          {topics.map((topic) => {
            return (
              <li
                key={topic.slug}
                className={
                  "topic-container " +
                  (topic_slug === topic.slug ? "topic-active" : "")
                }
              >
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
        topic={topic_slug}
      />
      <ArticleList
        articles={articles}
        isError={isError}
        isLoading={isLoading}
      />
    </>
  );
}

export default Topic;
